import { Router, Response, Request } from 'express';
import  MovieController  from '../app/controllers/movieController';
import  VoteController  from '../app/controllers/voteController';

const router = Router();
const routes = () => {
  router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });
  router.get('/movies', MovieController.getAll);
  router.post('/vote', VoteController.vote);

  return router;
};

export default routes;
