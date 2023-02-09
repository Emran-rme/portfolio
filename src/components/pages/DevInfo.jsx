import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: "primary.main" }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی: عمران رستم زاده</Info>
      <Info>سن : 30</Info>
      <Info>شهر : مراغه</Info>
      <Info>rostamzaeemran93@gmail.com : ایمیل</Info>
      <Info>شماره تماس : 09143699803</Info>
    </>
  );
};

export default DevInfo;
