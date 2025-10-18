import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import "./Info.css"
export default function InfoBox({ info }) {
  let hot = "https://images.unsplash.com/photo-1687462909401-d4fb622a1e89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
  let cold = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
  let rain = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?s=1024x1024&w=is&k=20&c=JmmkAKBNVz2QC2YaXGl8lLvYQYrn6SYXt_FPtN-8JUc=";
  return (
    <div className='infoBox'>
      <h2>{info.humidity > 80 ? < WaterDropIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />} Weather info-{info.weather}</h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? rain : info.temp > 15 ? hot : cold}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature:{info.temp} &deg;C</p>
            <p>Humidity:{info.humidity}</p>
            <p>Minimum Temperature:{info.tempMin} &deg;C</p>
            <p>Minimum Temperature:{info.tempMax} &deg;C</p>
            <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}