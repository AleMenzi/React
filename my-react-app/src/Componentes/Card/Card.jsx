import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css"

const CardUser = () => {
      return (
      <Card sx={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          alt="posavasos de hulk"
          height="300"
          image="https://phoenix3d.netlify.app/img/hulkposavasos.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Posavasos de Hulk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hulk es un personaje ficticio, un superhéroe que aparece en los cómics estadounidenses publicados por la editorial Marvel Comics, es considerado el personaje más fuerte de Marvel Comics.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Compartir</Button>
          <Button size="small">Leer más</Button>
        </CardActions>
      </Card>
      );
      
    }
export default CardUser;