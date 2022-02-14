import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function MediaControlCard(props: any) {
  console.log(props);


  return (
    <Card className='article-card' style={{
      display: 'flex', boxShadow: " 0px 0px 30px -15px rgb(0 0 0 / 30%)", borderRadius: "20px",
    }}>
      <Box style={{ width: props.image ? "60%" : "100%", padding: props.image ? "100px 60px" : "50px 30px" }}>
        <CardContent>
          {props.children}
        </CardContent>
        <div ><Button variant="contained" href={props.path} style={{backgroundColor:"#2f439a", padding:"7px 20px", fontFamily: '"Helvetica Hebrew",Sans-serif', fontSize: "16px", fontWeight: "700", width: "auto"}} >
          <ChevronLeftIcon/>קרא עוד
        </Button ></div>
      </Box>
      {props.image ? <CardMedia
        component="img"
        style={{ width: "40%" }}
        image={props.image}
        alt="working-team"
      /> : null}
    </Card>
  );
}
