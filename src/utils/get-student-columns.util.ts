import { Prisma } from '@prisma/client';

export const GetStudentColumnsUtil = () => {
  const possibleValues: any = {};
  Prisma.dmmf.datamodel.enums.map((field) => {
    const key = field.name;
    possibleValues[key] = field.values.map((value) => {
      return value.dbName;
    });
  });
  return [
    {
      name: 'current_educations_type',
      type: 'enum',
      ru: 'Тип обучения',
      values: possibleValues.current_educations_type,
    },
    {
      name: 'educational_programs_hours_number',
      type: 'enum',
      ru: 'Количество часов',
      values: possibleValues.educational_programs_hours_number,
    },
    {
      name: 'international_infos_RF_location',
      type: 'enum',
      ru: 'Нахождение в РФ',
      values: possibleValues.international_infos_RF_location,
    },
    {
      name: 'Дата въезда',
      type: 'date',
      ru: 'Дата въезда',
    },
    {
      name: 'enrollments_status',
      type: 'enum',
      ru: 'Зачисление',
      values: possibleValues.enrollments_status,
    },
    {
      name: 'country',
      type: 'string',
      ru: 'Страна',
    },
    {
      name: 'gender',
      type: 'enum',
      ru: 'Пол',
      values: possibleValues.passports_gender,
    },
    {
      name: 'payment_status',
      type: 'enum',
      ru: 'Статус оплаты',
      values: possibleValues.payments_payment_status,
    },
    {
      name: 'student_payment_first',
      type: 'date',
      ru: 'Дата первого платежа (факт)',
    },
    {
      name: 'student_payment_second',
      type: 'date',
      ru: 'Дата второго платежа (факт)',
    },
    {
      name: 'student_payment_third',
      type: 'date',
      ru: 'Дата третьего платежа (факт)',
    },
    {
      name: 'student_payment_fourth',
      type: 'date',
      ru: 'Дата четвертого платежа (факт)',
    },
    {
      name: 'transfer_to_international_service',
      type: 'date',
      ru: 'Дата передачи в международную службу',
    },
    {
      name: 'transfer_to_MVD',
      type: 'date',
      ru: 'Переданы в МВД',
    },
    {
      name: 'estimated_receipt_date',
      type: 'date',
      ru: 'Ориентировочная дата получения',
    },
    {
      name: 'actual_receipt_date_invitation',
      type: 'date',
      ru: 'Фактическая дата получения приглашения',
    },
    {
      name: 'current_educations_form_study',
      type: 'enum',
      ru: 'Форма обучения',
      values: possibleValues.current_educations_form_study,
    },
  ];
};
