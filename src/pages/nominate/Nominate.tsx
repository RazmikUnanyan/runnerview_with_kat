import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import cn from "classnames";
import styles from "./nominate.module.scss";
import { PageTitle, Input, Textarea, Button } from "../../components";
// @ts-ignore
import { INominateProps } from "./nominate.props";

const initialForm = {
  name: "",
  email: "",
  firstName: "",
  lastName: "",
  link: "",
  message: "",
}
export const Nominate: FC<INominateProps> = () => {
  const [formData, setFormData] = useState(initialForm);
  const [filledFields, setFilledFields] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();


    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_NOMINATE_TEMPLATE_ID || '',
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormData(initialForm)
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setFormData(initialForm)
        }
      );
  };

  useEffect(() => {
    const count = Object.values(formData).filter((value) => value.trim() !== "").length;
    setFilledFields(count);
  }, [formData]);

  return (
    <motion.section className={styles.contacts_wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle>Nominate</PageTitle>
      <div className={styles.contacts}>
        <div className={styles.contacts_info}>{/* Дополнительная информация, если нужна */}</div>
        <form onSubmit={sendEmail} className={styles.contacts_form}>
          Your Name and Email
          <div className={styles.contacts_form_group}>
            <div className={styles.contacts_form_input_wrapper}>
              <Input
                type="text"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.contacts_form_input_wrapper}>
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          Whom would you like to nominate?
          <div className={styles.contacts_form_group}>
            <div className={styles.contacts_form_input_wrapper}>
              <Input
                type="text"
                name="firstName"
                placeholder="first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.contacts_form_input_wrapper}>
              <Input
                type="text"
                name="lastName"
                placeholder="last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          What's their Instagram handle?
          <div className={styles.contacts_form_input_wrapper}>
            <Input
              type="text"
              name="link"
              placeholder="link"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </div>
          Why do you think they would be an inspiring guest?
          <div className={cn(styles.contacts_form_input_wrapper, styles.contacts_form_input_area)}>
            <Textarea
              name="message"
              placeholder="text"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required></Textarea>
          </div>
          <Button percentageFilled={19 * filledFields} type="submit" variant={filledFields < 6 ? "outline" : "primary"}>
            Send
          </Button>
        </form>
      </div>
    </motion.section>
  );
};
