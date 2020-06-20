//Module installed
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {PORT, url} from './config';

//Import middleware
import { checkToken } from './Middleware/JWT';

// Route import
import { anonymeRouteUser, adminRouteUser } from './Routes/UserRoute';
import { anonymeRouteDrink, adminRouteDrink } from './Routes/DrinkRoute';
import { anonymeRouteDessert, adminRouteDessert } from './Routes/DessertRoute';
import { anonymeRouteCategory, adminRouteCategory } from './Routes/CategoryRoute';
import { anonymeRoutePizza, adminRoutePizza } from './Routes/PizzaRoute';
import { anonymeRoutePromo, adminRoutePromo } from './Routes/PromoRoute';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(`${url}/user`, anonymeRouteUser);
app.use(`${url}/drink`, anonymeRouteDrink);
app.use(`${url}/pizza`, anonymeRoutePizza);
app.use(`${url}/dessert`, anonymeRouteDessert);
app.use(`${url}/category`, anonymeRouteCategory);
app.use(`${url}/promo`, anonymeRoutePromo);

app.use(`${url}/admin/user`, checkToken ,adminRouteUser);
app.use(`${url}/admin/pizza`, checkToken, adminRoutePizza);
app.use(`${url}/admin/category`, checkToken, adminRouteCategory);
app.use(`${url}/admin/drink`, checkToken, adminRouteDrink);
app.use(`${url}/admin/dessert`, checkToken, adminRouteDessert);
app.use(`${url}/admin/promo`, checkToken, adminRoutePromo);

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));