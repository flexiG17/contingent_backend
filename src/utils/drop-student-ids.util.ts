export const DropStudentIdsUtil = (student: any) => {
  const res = { ...student };
  delete res?.id;
  delete res?.contacts.id;
  delete res?.contacts.student_id;
  delete res?.current_educations.id;
  delete res?.current_educations.student_id;
  delete res?.current_educations.educational_programs;
  delete res?.current_educations.educational_program_id;
  delete res?.international_infos.id;
  delete res?.international_infos.student_id;
  delete res?.enrollments.id;
  delete res?.enrollments.student_id;
  delete res?.metadatas.id;
  delete res?.metadatas.users;
  delete res?.metadatas.student_id;
  delete res?.metadatas.created_by_id;
  delete res?.old_educations.id;
  delete res?.old_educations.student_id;
  delete res?.passports.id;
  delete res?.passports.student_id;
  delete res?.payments;

  return res;
};
