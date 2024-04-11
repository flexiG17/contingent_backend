import { CreateStudentDto } from '../students/dto/create-student.dto';

export const ParseStudentDatesUtil = (
  createStudentDto: CreateStudentDto,
): CreateStudentDto => {
  return {
    ...createStudentDto,
    current_education: {
      ...createStudentDto.current_education,
      date_started_learning: new Date(
        createStudentDto.current_education.date_started_learning,
      ),
    },
    enrollment: {
      ...createStudentDto.enrollment,
      enrollment_date: new Date(createStudentDto.enrollment.enrollment_date),
      expulsion_date: new Date(createStudentDto.enrollment.expulsion_date),
    },
    international_info: {
      ...createStudentDto.international_info,
      entry_date: new Date(createStudentDto.international_info.entry_date),
      departure_date: new Date(
        createStudentDto.international_info.departure_date,
      ),
      estimated_receipt_date: new Date(
        createStudentDto.international_info.estimated_receipt_date,
      ),
      actual_receipt_date_invitation: new Date(
        createStudentDto.international_info.actual_receipt_date_invitation,
      ),
      visa_validity: new Date(
        createStudentDto.international_info.visa_validity,
      ),
      transfer_to_international_service: new Date(
        createStudentDto.international_info.transfer_to_international_service,
      ),
      transfer_to_MVD: new Date(
        createStudentDto.international_info.transfer_to_MVD,
      ),
    },
    passport: {
      ...createStudentDto.passport,
      passport_expiration: new Date(
        createStudentDto.passport.passport_expiration,
      ),
      passport_issue_date: new Date(
        createStudentDto.passport.passport_issue_date,
      ),
    },
    payment: createStudentDto.payment
      ? {
          ...createStudentDto.payment,
          /*student_payments: [
            ...createStudentDto.payment.student_payments.map((payment) => {
              return {
                ...payment,
                date: new Date(payment.date),
              };
            }),
          ],*/
        }
      : {
          contract_amount: 140000,
          payment_status: 'NotPaid',
          student_payments: [],
        },
  };
};
