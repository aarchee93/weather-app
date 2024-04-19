
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './SearchBox.css';

export default function InfoBox( {info} ) {
    const INIT_URL = "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_url = "https://images.unsplash.com/photo-1521223619409-8085d2607891?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url = "https://images.unsplash.com/photo-1580193539301-18266ee9ff3b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rain_url = "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
            <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia className='Img-InfoBox'
        component="img"
        alt="green iguana"
        height="140"
        image={ info.humdity >80 ? rain_url : info.temp >15 ? hot_url : cold_url}
      />

    <div className='Information'>
      <h3>{info.city}</h3>
        <p>Temperature : {info.temp}&deg;C</p>
        <p> Humidity : {info.humidity}</p>
        <p>Temp-MIN : {info.tempMin}&deg;C</p>
        <p>Temp-MAX : {info.tempMax}&deg;C</p>
        <p>The weather is Something like {info.weather} and feelsLike {info.feelsLike}</p>
    </div>
    </Card>
    </div>
        </div>
    )
}