import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FolderIcon from '@material-ui/icons/Folder';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },

}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function CenteredGrid() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const [arvo, setArvo] = React.useState('recents');

  const changeHandler = (event, newArvo) => {
    setValue(newArvo);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <AppBar position='relative' size='medium' color='secondary'>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                <Typography variant='h3' align='center' color='' >Material-UI Testcase</Typography>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/2c/TreasureRoll_SuchCool.png/256px-TreasureRoll_SuchCool.png?version=ef9f9e69d6c279448dda8adc39381abd"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
            </Button>
              <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/2f/TreasureRoll_Bubblelicious.png/256px-TreasureRoll_Bubblelicious.png?version=19f84b5ccdd040503eee872f5206fec2"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
            </Button>
              <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/70/TreasureRoll_SuperKawaii.png/256px-TreasureRoll_SuperKawaii.png?version=dc3af0d53f134439640ef9da28fa347d"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
            </Button>
              <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={dense}
                  onChange={event => setDense(event.target.checked)}
                  value="dense"
                />
              }
              label="Enable dense"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondary}
                  onChange={event => setSecondary(event.target.checked)}
                  value="secondary"
                />
              }
              label="Enable secondary text"
            />
          </FormGroup>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={6} md={6}>
          <Typography variant="h6" className={classes.title}>
            Icon with text
      </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>        </Grid>

        <Grid item xs={12}>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Comments" />
                </Grid>
                <div>
                  <Button color='primary' size='small' variant='contained'>Send</Button>
                  <Button color='secondary' size='small' variant='contained'>Cancel</Button>
                </div>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <BottomNavigation value={arvo} onChange={changeHandler} className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
          </BottomNavigation>
        </Grid>
      </Grid>
    </div>
  );
}