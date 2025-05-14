import React from 'react';
import Image from 'next/image';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import CustomLink from '@/components/Link';

const links = [
    {
        linkTitle: "GitHub",
        link: "https://github.com/"
    },
    {
        linkTitle: "Frontend Mentor",
        link: "https://www.frontendmentor.io/"
    },
    {
        linkTitle: "LinkedIn",
        link: "https://linkedin.com/"
    },
    {
        linkTitle: "Twitter",
        link: "https://twitter.com/"
    },
    {
        linkTitle: "Instagram",
        link: "https://instagram.com/"
    }
]

const Card = () => {
  return (
    <Box className='cardBackground' sx={{width:"520px", padding:"2rem", borderRadius:"8px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"15px"}}>
        <Image
            src="/assets/images/avatar-jessica.jpeg"
            alt="profile image"
            height={88}
            width={88}
            style={{ borderRadius: "50%"}}
        />
        <Typography variant='h1' sx={{ fontSize: "36px"}}>
            Jessica Randall
        </Typography>
        <Typography variant='h2' sx={{ fontSize:"20px", fontWeight:"600"}} className='neon'>
            London, United Kingdom
        </Typography>
        <Typography sx={{ fontSize:"20px", marginBottom:"25px", marginTop:"25px" }}>
            Front-end developer and avid reader.
        </Typography>
        {links.map((link) => {
            return <CustomLink linkData={link} key={link.linkTitle} />
        })}
    </Box>
  )
}

export default Card;