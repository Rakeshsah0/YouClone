import { Stack } from "@mui/material"
import {Link} from "react-router-dom"
import {logo,DefaultUserIcon} from '../utils/constants'
import {SearchBar,User} from "./";

const Navbar = () => (
    <Stack 
      direction="row" 
      alignItems="center"
      p={2} 
      sx={{position:"sticky", background:'#000',top:0, justifyContent:"space-between"}}
    >
      <Link to="/" style={{display:'flex',alignItems:'center'}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack 
      direction="row" 
      alignItems="center"
      sx={{position:"sticky",justifyContent:"space-between"}}>

      <SearchBar/>
      <User/>
      </Stack>
    </Stack>
  );

export default Navbar