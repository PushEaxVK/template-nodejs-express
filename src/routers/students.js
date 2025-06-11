import { Router } from 'express';
import {
  createStudentController,
  deleteStudentController,
  getStudentByIdController,
  getStudentsController,
  patchStudentController,
  upsertStudentController,
} from '../controllers/students.js';

const router = Router();

router.get('/students', getStudentsController);
router.get('/students/:studentId', getStudentByIdController);
router.post('/students', createStudentController);
router.delete('/students/:studentId', deleteStudentController);
router.put('/students/:studentId', upsertStudentController);
router.patch('/students/:studentId', patchStudentController);

export default router;
