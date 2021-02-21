import { Router } from 'express';

import Profilecontroller from '../controllers/ProfileController';

import ensureAuthentication from '../middlewares/ensureAuthentication';

const profileRouter = Router();
const profileController = new Profilecontroller();

profileRouter.use(ensureAuthentication);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
