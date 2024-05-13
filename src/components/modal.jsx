import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicDateRangeCalendar from "./dateRangeCalender";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <BottomNavigationAction
        
        label="Book Now"
        icon={<CallEnd />}
       
      /> */}
      <Button
     onClick={handleOpen}
        sx={{ color: "rgb(25 118 210)", fontWeight: "bold",height:"100%" }}
      >
        {" "}
        Book Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book a Date Range
          </Typography>
          <BasicDateRangeCalendar />
        </Box>
      </Modal>
    </div>
  );
}
