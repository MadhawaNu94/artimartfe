import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Artimart
          </Typography>
          <div>
          Sri Lanka Handicrafts Board was established on 17th January 1983, under the National Crafts Council 
          & allied Institutions Act No. 35 of 1982.
          The Sri Lanka Handicrafts Board better known as “ARTIMART” is a state corporation under the Ministry of Rural Industries 
          and Self Employment Promotion is set up to preserve and develop traditional skill of the craftsmen. 
          The Board is dealing with nearly 3500 leading master craftsmen/entrepreneurs 
          who are producing handicrafts item at Rural/Cottage industry level. 
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            97 Bauddhaloka Mw, Colombo 07
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: artimart@gmail.com
          </Typography>
          <Typography mb="30px">(+94)11-2 444 664</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
