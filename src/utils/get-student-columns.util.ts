import { Prisma } from '@prisma/client';

export const GetStudentColumnsUtil = (): {
  section: string;
  key: string;
  type?: string;
  header: string;
}[] => {
  /*const possibleValues: any = {};
  Prisma.dmmf.datamodel.enums.map((field) => {
    const key = field.name;
    possibleValues[key] = field.values.map((value) => {
      return value.dbName;
    });
  });*/
  return [
    {
      section: '',
      key: 'latin_name',
      header: 'ФИО (лат.)',
    },
    {
      section: '',
      key: 'russian_name',
      header: 'ФИО (кир.)',
    },
    {
      section: 'enrollment',
      key: 'status',
      header: 'Тип обучения',
    },
    {
      section: 'enrollment',
      key: 'order_number',
      header: 'Номер приказа о зачислении',
    },
    {
      section: 'enrollment',
      key: 'enrollment_date',
      header: 'Дата зачисления',
    },
    {
      section: 'enrollment',
      key: 'expulsion_order',
      header: 'Номер приказа об отчислении',
    },
    {
      section: 'enrollment',
      key: 'expulsion_date',
      header: 'Дата отчисления',
    },
    {
      section: 'enrollment',
      key: 'contract_number',
      header: 'Номер договора',
    },
    {
      section: 'enrollment',
      key: 'status_1c',
      header: 'Статус 1C',
    },
    {
      section: 'enrollment',
      key: 'scholarship',
      header: 'Стипендия',
    },

    {
      section: 'contacts',
      key: 'phone_number',
      header: 'Контактный телефон студента',
    },
    {
      section: 'contacts',
      key: 'first_email',
      header: 'Первая эл. почта студента',
    },
    {
      section: 'contacts',
      key: 'second_email',
      header: 'Вторая эл. почта студента',
    },

    {
      section: 'tutors',
      key: 'tutor_name',
      header: 'ФИО Куратора',
    },

    {
      section: 'current_education',
      key: 'type',
      header: 'Тип обучения',
    },
    {
      section: 'current_education',
      key: 'form_study',
      header: 'Форма обучения',
    },
    {
      section: 'current_education',
      key: 'started_learning',
      header: 'Приступил к обучению',
    },
    {
      section: 'current_education',
      key: 'date_started_learning',
      header: 'Дата преступления к обучению',
    },
    {
      section: 'current_education',
      key: 'desired_level',
      header: 'Уровень желаемого образования',
    },
    {
      section: 'current_education',
      key: 'specialty_code',
      header: 'Код направления подготовки (специальности)',
    },
    {
      section: 'current_education',
      key: 'specialty_direction',
      header: 'Направление подготовки (специальность)',
    },
    {
      section: 'current_education',
      key: 'education_field',
      header: 'Область образования',
    },
    {
      section: 'current_education',
      key: 'educational_organization',
      header: 'Образовательная организация',
    },

    {
      section: 'international_info',
      key: 'residence_place',
      header: 'Место проживания в РФ',
    },
    {
      section: 'international_info',
      key: 'RF_location',
      header: 'Нахождение в РФ',
    },
    {
      section: 'international_info',
      key: 'entry_date',
      header: 'Дата въезда',
    },
    {
      section: 'international_info',
      key: 'departure_date',
      header: 'Дата отъезда',
    },
    {
      section: 'international_info',
      key: 'estimated_receipt_date',
      header: 'Ориентировочная дата получения',
    },
    {
      section: 'international_info',
      key: 'actual_receipt_date_invitation',
      header: 'Фактическая дата получения приглашения',
    },
    {
      section: 'international_info',
      key: 'application_source',
      header: 'Откуда пришла заявка',
    },
    {
      section: 'international_info',
      key: 'visa_validity',
      header: 'Срок действия визы',
    },
    {
      section: 'international_info',
      key: 'transfer_to_international_service',
      header: 'Дата передачи в международную службу',
    },
    {
      section: 'international_info',
      key: 'transfer_to_MVD',
      header: 'Дата передачи в МВД',
    },

    {
      section: 'passport',
      key: 'country',
      header: 'Страна',
    },
    {
      section: 'passport',
      key: 'gender',
      header: 'Пол',
    },
    {
      section: 'passport',
      key: 'birth_date',
      header: 'Дата рождения',
    },
    {
      section: 'passport',
      key: 'birth_place',
      header: 'Место рождения',
    },
    {
      section: 'passport',
      key: 'citizenship',
      header: 'Гражданство',
    },
    {
      section: 'passport',
      key: 'passport_number',
      header: 'Номер паспорта',
    },
    {
      section: 'passport',
      key: 'passport_expiration',
      header: 'Срок действия паспорта',
    },
    {
      section: 'passport',
      key: 'passport_issued',
      header: 'Паспорт выдан в ',
    },
    {
      section: 'passport',
      key: 'passport_issue_date',
      header: 'Дата выдачи паспорта',
    },

    {
      section: 'payments',
      key: 'contract_amount',
      header: 'Cумма для оплаты по договору',
    },
    {
      section: 'payments',
      key: 'payment_status',
      header: 'Статус оплаты',
    },

    {
      section: 'old_education',
      key: 'level_education',
      header: 'Уровень полученного образования',
    },
    {
      section: 'old_education',
      key: 'name_educational_institution',
      header: 'Наименование учебного заведения',
    },
    {
      section: 'old_education',
      key: 'location_educational_institution',
      header: 'Местонахождение учебного заведения',
    },
    {
      section: 'old_education',
      key: 'graduation_year',
      header: 'Год окончания',
    },
    {
      section: 'old_education',
      key: 'direction_number',
      header: 'Рег. номер направления',
    },

    {
      section: 'metadata',
      key: 'created_at',
      header: 'Дата создания студента',
    },
    {
      section: 'metadata',
      key: 'updated_at',
      header: 'Дата изменения студента',
    },
    {
      section: 'metadata',
      key: 'user',
      header: 'Кто создал студента',
    },
  ];
};
