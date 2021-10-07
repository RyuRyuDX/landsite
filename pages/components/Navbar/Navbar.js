import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from "next/link"
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import { red } from '@mui/material/colors';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import EventSharpIcon from '@mui/icons-material/EventSharp';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import HomeIcon from '@mui/icons-material/Home';
import ChromeReaderModeSharpIcon from '@mui/icons-material/ChromeReaderModeSharp';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #EEEEEE',
  boxShadow: 24,
  p: 5,
  cursor: 'pointer',
  textAlign: 'left',
};

const text = {
  color: 'gray',
  fontSize: '32px',
  letterSpacing: '2px',
  fontWeight: 'lighter',
  textTransform: 'none',
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col justify-center shadow-lg mx-7 border-2">
        <Button sx={text} onClick={handleOpen}>
          Menu
        </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Link href="/">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <HomeIcon />  Home
            </Typography>
          </Link>
          <Link href={"https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000552949"}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <EventSharpIcon />  Reservation
            </Typography>
          </Link>
          <Link href={"https://beauty.hotpepper.jp/slnH000552949/coupon/#:~:text=%C2%A0-,LAND,-%E3%80%9010%E6%9C%888"}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <MenuBookSharpIcon />  Menu
            </Typography>
          </Link>
          <Link href={"https://beauty.hotpepper.jp/slnH000552949/blog/"}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <BorderColorIcon />  Blog
            </Typography>
          </Link>
          {/* <Link href="components/Hairstyle/Hairstyle" as="/hairstyle">
            <Typography id="modal-modal-title" variant="h6" component="h2">
            <ContentCutIcon />  Hair Styles
            </Typography>
          </Link> */}
        </Box>
      </Modal>
    </div>
  );
}