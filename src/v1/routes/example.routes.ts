import { Router } from 'express';
import { ExampleController } from '../controllers';

const exampleRouter = Router();
/**
 * * exampleRouter.get('/',  <your-controller-function>);
 */
exampleRouter.get('/', ExampleController.basicGet);

export const ExampleRouter = exampleRouter;
