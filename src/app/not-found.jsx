import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowLeft as ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr/ArrowLeft';
import { config } from '../config';
import { paths } from '../paths';
export const metadata = {
  title: `Not found | ${config.site.name}`
};
export default function NotFound() {
  return /*#__PURE__*/React.createElement(Box, {
    component: "main",
    sx: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: 3,
    sx: {
      alignItems: 'center',
      maxWidth: 'md'
    }
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    component: "img",
    alt: "Under development",
    src: "/assets/error-404.png",
    sx: {
      display: 'inline-block',
      height: 'auto',
      maxWidth: '100%',
      width: '400px'
    }
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    sx: {
      textAlign: 'center'
    }
  }, "404: The page you are looking for isn't here"), /*#__PURE__*/React.createElement(Typography, {
    color: "text.secondary",
    variant: "body1",
    sx: {
      textAlign: 'center'
    }
  }, "You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation"), /*#__PURE__*/React.createElement(Button, {
    component: RouterLink,
    href: paths.home,
    startIcon: /*#__PURE__*/React.createElement(ArrowLeftIcon, {
      fontSize: "var(--icon-fontSize-md)"
    }),
    variant: "contained"
  }, "Go back to home")));
}