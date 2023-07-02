import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css"
import ItemCount from '../Contador/count'

const CardUser = (props) => {
  const {title, image, price} = props
      return (
      <Card sx={{ width: "21%", height:"530px"}}>
        <CardMedia
          component="img"
          height="300"
          image={image}
        />
        <CardContent className='infoItem'>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
        <ItemCount initial={1} stock={3} onAdd={(contador) => console.log("Cantidad agregada ", contador , {title})}/>
        </CardActions>
      </Card>

      );
      
    }

export default CardUser;