import ICreateAppoinmentDTO from '../dto/ICreateAppointmentDTO';
import Appointment from '../infra/typeorm/entities/Appointments';

export default interface IAppointmentRepository {
  create(data: ICreateAppoinmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
