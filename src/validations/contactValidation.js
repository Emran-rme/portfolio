import * as Yup from "yup";

export const contantValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نمی باشد")
    .required("آدرس ایمیل الزامی می باشد"),
  subject: Yup.string().required("نوشتن عنوان الزامی می باشد"),
  message: Yup.string().required("نوشتن پیام الزامی می باشد"),
  recaptcha: Yup.string().required("کپچا الزامی می باشد"),
});
