"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { Box, Stack } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Loadin_section } from "../../../lib/Loadin_section";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useEffect, useState } from "react";
import { clearErrors, update_user } from "api/authapi";
import { Alert_ } from "styles/theme/alert";
import { add_branch, update_branch } from "../../../api/branchapi";
import generateUuid from "../../../lib/Uuidv4";

const schema = z.object({
  link: z.string().min(1, { message: "Whatsapp link is required" }),
  branch: z.string().min(1, { message: "Branch is required" }),
  status: z.string().min(1, { message: "Status is required" }),
});

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const Edit_branch = ({ open, setOpen, isvisible }) => {
  const dispatch = useDispatch();
  const { loading_, branch_details, success } = useSelector(
    (state) => state.branch
  );
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      link: "",
      branch: "",
      status: "Active",
    },
  });

  const onSubmit = async (data) => {
    if (isvisible) {
      dispatch(update_branch(data, branch_details.branch_id));

      return;
    }
    const uuid = generateUuid();
    await dispatch(add_branch(data, uuid));
  };

  useEffect(() => {
    if (!isvisible) {
      setValue("link", "");
      setValue("branch", "");
      setValue("status", "Active");
    }
    if (success) {
      setValue("link", "");
      setValue("branch", "");
      setValue("status", "Active");
    }
    if (branch_details) {
      setValue("link", branch_details.link || "");
      setValue("status", branch_details.status || "");
      setValue(
        "branch",
        branch_details.branch === null ? "Not set" : branch_details.branch || ""
      );
    }
  }, [branch_details, success, setValue, dispatch, isvisible]);

  return (
    <>
      <Box>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpen(false)}
          className="add-cus"
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            style: {
              justifyContent: "flex-end",
              minWidth: "350px", // Make the dialog full width
              margin: "0px",
            },
          }}
        >
          <DialogTitle>
            <Stack spacing={1}>
              <Typography variant="h4">
                {isvisible ? "Update" : "Add new"} Branch
              </Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            {loading_ ? (
              <Loadin_section />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                  <Controller
                    control={control}
                    name="link"
                    // disabled={true}
                    render={({ field }) => (
                      <FormControl
                        sx={{ marginTop: "13px" }}
                        error={Boolean(errors.link)}
                      >
                        <InputLabel sx={{ top: "-6px", fontSize: "13px" }}>
                          Whatsapp Link
                        </InputLabel>
                        <OutlinedInput
                          inputProps={{
                            style: { padding: "10px", fontSize: "12px" },
                          }}
                          {...field}
                          label="Whatsapp Link"
                          type="link"
                        />
                        {errors.link && (
                          <FormHelperText>{errors.link.message}</FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                </Stack>
                <Stack spacing={2}>
                  <Controller
                    control={control}
                    name="branch"
                    render={({ field }) => (
                      <FormControl
                        sx={{ marginTop: "13px" }}
                        error={Boolean(errors.branch)}
                      >
                        <InputLabel sx={{ top: "-6px", fontSize: "13px" }}>
                          Branch Name
                        </InputLabel>
                        <OutlinedInput
                          inputProps={{
                            style: { padding: "10px", fontSize: "12px" },
                          }}
                          {...field}
                          label="Branch name"
                          type="branch"
                        />
                        {errors.branch && (
                          <FormHelperText>
                            {errors.branch.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                </Stack>
                <Stack spacing={2}>
                  <Controller
                    control={control}
                    name="status"
                    render={({ field }) => (
                      <FormControl
                        sx={{ marginTop: "13px" }}
                        error={Boolean(errors.status)}
                      >
                        <InputLabel sx={{ top: "-6px", fontSize: "13px" }}>
                          Status
                        </InputLabel>
                        <Select
                          {...field}
                          label="Status"
                          sx={{
                            ".MuiSelect-select": {
                              padding: "8px 10px",
                              fontSize: "12px",
                            },
                          }}
                        >
                          <MenuItem value="Active" sx={{ fontSize: "12px" }}>
                            Active
                          </MenuItem>
                          <MenuItem value="Inactive" sx={{ fontSize: "12px" }}>
                            Inactive
                          </MenuItem>
                        </Select>
                        {errors.status && (
                          <FormHelperText>
                            {errors.status.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                </Stack>
                <Button
                  sx={{
                    padding: "5px 10px",
                    marginTop: "15px",
                    fontSize: "14px",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Add New
                </Button>
              </form>
            )}
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Box>
    </>
  );
};
