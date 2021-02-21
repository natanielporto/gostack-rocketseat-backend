import ICreateAppoinmentDTO from '../dto/ICreateAppointmentDTO';
import IFindAllInDayFromProviderDTO from '../dto/IFindAllInDayFromProviderDTO';
import IFindAllInMonthFromProviderDTO from '../dto/IFindAllInMonthFromProviderDTO';
import Appointment from '../infra/typeorm/entities/Appointments';

export default interface IAppointmentRepository {
  create(data: ICreateAppoinmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
