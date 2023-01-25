import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const initialValues = {
      firstName: '',
      email: '',
      type: '',
      comment: '',
  }
 
    
  const onSubmit = (values,submitProps) => {
    setTimeout(() => {
        submit("", values)
        console.log('isloading 1', isLoading)
        if (response && response.type === "success") {
          onOpen("success", response.message)
          submitProps.setSubmitting(true)
        }


        console.log('isloading 2', isLoading)
        if (response && response.type === "error") {      
          onOpen("error", response.message)
          submitProps.setSubmitting(false)
        }

    }, 5000);
   
    submitProps.setSubmitting(true)
    submitProps.resetForm()
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    comment: Yup.string().required('Required')
  })

const formik = useFormik({
  initialValues,
  onSubmit,
  validationSchema,
});

  //console.log("Form Errors ", formik.errors)
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName ? true: false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  // onChange={formik.handleChange}
                  // value={formik.values.firstName}
                  // onBlur={formik.handleBlur}
                   {...formik.getFieldProps('firstName')}
                />
                  {formik.touched.firstName && formik.errors.firstName ? <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email ? true: false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  // onChange={formik.handleChange}
                  // value={formik.values.email}
                  // onBlur={formik.handleBlur}
                   {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource"> Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment ? true: false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  type="comment"
                  name="comment"
                  height={250}
                  // onChange={formik.handleChange}
                  // value={formik.values.comment}
                  // onBlur={formik.handleBlur}
                  {...formik.getFieldProps('comment')}
                />
                  {formik.touched.comment && formik.errors.comment ? <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> : null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
