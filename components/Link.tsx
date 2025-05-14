import React from 'react';
import Box from "@mui/material/Box";
import Link from "next/link";

interface LinkProps {
    linkData : { linkTitle: string; link: string };
}

const CustomLink = ({ linkData }: LinkProps) => {
  return (
    <Box className="linkBackground"
        sx={{width:"100%", borderRadius:"6px", display:"flex", justifyContent:"center", alignItems:"center", padding:"18px 0px", fontSize:"22px", fontWeight:"600"}}>
        <Link href={linkData.link} target='_blank' className='link'>
            {linkData.linkTitle}
        </Link>
    </Box>
  )
}

export default CustomLink;