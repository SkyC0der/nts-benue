import React, {  useState } from "react";
import {
  Form,
  Input,
  ConfigProvider,
  Select,
  message,
} from "antd";
// import type { UploadProps, FormProps, RadioChangeEvent } from 'antd';
// import type { DatePickerProps } from 'antd';
import { DatePicker } from "antd";
import dayjs from 'dayjs';
import { LeftOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import moment from "moment";
import logo from "../assets/homelogo.png";
import background from "../assets/homepage.png";
import { useMutation } from '@tanstack/react-query';
// import { submitForm } from '@/lib/submit';
// import { useRouter } from 'next/router';
import axios from "axios";
import { useNavigate } from "react-router";


function FounderOnboarding() {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    const finalFormData = { ...formData, ...values };
    console.log('Final Success:', finalFormData);
    // handleHome();
    mutate({
      name: finalFormData.name,
      phone_no: finalFormData.phone_no,
      gender: finalFormData.gender,
      email: finalFormData.email,
      lc: finalFormData.lc,
      date_of_birth: finalFormData.date_of_birth,
      title_held: finalFormData.title_held,
      first_hunt: finalFormData.first_hunt,
      have_allergies: finalFormData.have_allergies,
      treatment: finalFormData.treatment,
      can_stay_with_opposite_sex: finalFormData.can_stay_with_opposite_sex,
      next_kin_contact: finalFormData.next_kin_contact,
      next_kin_relationship: finalFormData.next_kin_relationship,
      suggestions: finalFormData.suggestions,
    });
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const handleNext = async () => {
    try {
      const values = await form.validateFields();
      if (values.birthday) {
        values.birthday = moment(values.birthday).format("DD/MM/YYYY");
      }
      setFormData((prev) => ({ ...prev, ...values }));
      setCurrentStep(currentStep + 1);
      // form.resetFields();
    } catch (errorInfo) {
      // console.log('Validation Failed:', errorInfo);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    // form.resetFields();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";


  const progress = (currentStep / 4) * 100;

  const validatePhoneNumber = (rule, value, callback) => {
    const phoneNumberRegex = /^\+?\d{10,}$/;
  
    if (value && !phoneNumberRegex.test(value)) {
      callback("Enter a valid phone number with at least 10 digits.");
    } else {
      callback();
    }
  };

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/completed");
    message.success("Dear Hunter, you have successfully registered!");
  };

  const disableFutureDates = (current) => {
    return current && current > dayjs().endOf('day');
  };
  const submitForm = async (data) => {
    try{
      const response = await axios.post('https://aiesec-backend.fly.dev/api/v1/nts-benue-registeration',data, {
        headers:{
          'x-server-key' : '37a59818-ee25-4f8a-bf5f-75830489890a'
        }
      });
      
      console.log("response", response);  
      console.log("data", data);
      
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
   
  };
    const { mutate, isPending } = useMutation({
      mutationFn: submitForm,
      onError: (error) => {
        console.log('error', error);
        if ( (error?.response?.data.message).includes('already exists')) {
          message.error('Dear Hunter, You have already registered. Check your email.');
          router.push('/');
        }
      },
      onSuccess: (data) => {
        console.log('data', data);
        handleHome();
      },
    });

  return (
    <div
      className="font-myLocalFont min-h-full form-bg w-full flex md:flex-row flex-col relative  bg-blend-hard-light bg-[#f1e6c7] bg-cover bg-center bg-no-repeat justify-between items-center md:p-4"
     
    >
      <div className="w-full md:w-[45%] mx-8 md:my-2 relative md:shadow-custom-3">
        
        <div className="  my-10 bg-transparent md:bg-transparent  py-6 mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full mx-auto header-gradient">
              <div
                className={`header-gradient-active rounded-r-xl h-[8px]`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="max-w-[350px] max-h-[350px]">
              <img
                className="w-full h-full"
                src="/assets/homelogo.png"
                alt=""
              />
            </div>
            {currentStep == 1 && (
              <div className="  text-center md:hidden flex flex-col justify-center">
                <div className="relative max-w-sm mx-auto">
                  <h1 className="font-externalFont font-medium text-[#6B120E] mx-auto text-[28px] leading-[36px]">
                    Your journey to claim the Royal Bounty starts here...
                  </h1>
                </div>
              </div>
            )}
            {currentStep == 2 && (
              <div className=" text-center md:hidden flex flex-col justify-center">
                 <div className="relative max-w-sm mx-auto">
                  <h1 className="font-externalFont font-medium text-[#6B120E] mx-auto text-[28px] leading-[36px]">
                  The Prize Awaits Those Who Prove Worthy...
                  </h1>
                </div>
              </div>
            )}
            {currentStep == 3 && (
              <div className=" md:hidden text-center flex flex-col justify-center">
                <div className="relative max-w-sm mx-auto">
                  <h1 className="font-externalFont font-medium text-[#6B120E] mx-auto text-[28px] leading-[36px]">
                  Your strength and wisdom will be tested... 
                  </h1>
                </div>
              </div>
            )}
            {currentStep == 4 && (
              <div className=" text-center md:hidden flex flex-col justify-center">
                <div className="relative max-w-sm mx-auto">
                  <h1 className="font-externalFont font-medium text-[#6B120E] mx-auto text-[28px] leading-[36px]">
                  are you prepared?
                  </h1>
                </div>
              </div>
            )}
          
          </div>
          <div className=" flex justify-center items-center ">
            <div className="w-full px-6">
              <ConfigProvider
                theme={{
                  components: {
                    Form: {
                      labelColor: "#6B120E",
                    },
                    Select:{
                      optionSelectedBg: '#CDA250 ',
                      optionSelectedColor: '#6B120E',
                    },
                    DatePicker:{
                    }
                  },
                  token: {
                    fontFamily: "Cairo",
                  },
                }}
              >
                <Form
                  form={form}
                  layout="vertical"
                  className="w-full  my-6  mx-auto"
                  requiredMark={false}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  {currentStep === 1 && (
                    <>
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Enter your full name!",
                          },
                        ]}
                        label="State your name, brave one."
                        className="font-semibold "
                      >
                        <Input className="font-myLocalFont w-full active:!bg-transparent hover:bg-transparent gradient-border !bg-transparent h-[41px] md:h-[67px] px-2 py-3 md:px-3 text-[12px] md:text-[24px] text-[#6B120E]" />
                      </Form.Item>
                      <Form.Item
                        label="Phone Number"
                        name="phone_no"
                        rules={[
                          {
                            required: true,
                            message: "Enter your phone number",
                          },
                          { validator: validatePhoneNumber },
                        ]}
                        className="font-semibold"
                      >
                        <Input
                          className="font-myLocalFont w-full active:bg-transparent hover:bg-transparent gradient-border bg-transparent h-[41px] md:h-[67px] px-2 py-3 md:px-3 text-[12px] md:text-[24px] text-[#6B120E]"
                          type="tel"
                        />
                      </Form.Item>
                      <Form.Item
                        name="gender"
                        className="font-semibold w-full "
                        label="What is your Gender?"
                        rules={[
                          {
                            required: true,
                            message: "Gender is required!",
                          },
                        ]}
                      >
                        <Select dropdownStyle={{backgroundColor: '#F4D36E', color: '#6B120E', boxShadow: '0px 4px 8px 0px #00000040'}} className="font-myLocalFont w-full hover:bg-transparent md:w-[496px] gradient-border bg-transparent h-[41px] md:h-[67px]  md:px-0 text-[12px] md:text-[24px]">
                          <Select.Option value="male">Male</Select.Option>
                          <Select.Option value="female">Female</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Enter your email address!",
                          },
                        ]}
                        className="font-semibold"
                      >
                        <Input className="font-myLocalFont w-full active:bg-transparent hover:bg-transparent gradient-border bg-transparent h-[41px] md:h-[67px] px-2 py-3 md:px-3 text-[12px] md:text-[24px] text-[#6B120E]" />
                      </Form.Item>
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <Form.Item
                        className="font-semibold"
                        label="Your Local Committee"
                        name="lc"
                        rules={[{ required: true, message: "LC is required!" }]}
                      >
                         <Select dropdownStyle={{backgroundColor: '#F4D36E', color: '#6B120E', boxShadow: '0px 4px 8px 0px #00000040'}} className="font-myLocalFont w-full hover:bg-transparent md:w-[496px] gradient-border bg-transparent h-[41px] md:h-[67px]  md:px-0 text-[12px] md:text-[24px]">
                         <Select.Option value="Abeokuta">
                            Abeokuta
                          </Select.Option>
                          <Select.Option value="Abuja">Abuja</Select.Option>
                          <Select.Option value="Akure">Akure</Select.Option>
                          <Select.Option value="Benin">Benin</Select.Option>
                          <Select.Option value="Benue">Benue</Select.Option>
                          <Select.Option value="Calabar">Calabar</Select.Option>
                          <Select.Option value="Enugu">Enugu</Select.Option>
                          <Select.Option value="Ibadan">Ibadan</Select.Option>
                          <Select.Option value="Ife">Ife</Select.Option>
                          <Select.Option value="Ilorin">Ilorin</Select.Option>
                          <Select.Option value="Jos">Jos</Select.Option>
                          <Select.Option value="Lagos">Lagos</Select.Option>
                          <Select.Option value="Port Harcourt">
                            Port-Harcourt
                          </Select.Option>
                          <Select.Option value="Others">
                            Others
                          </Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Date of Birth"
                        name="date_of_birth"
                        className="font-semibold w-full"
                        rules={[
                          {
                            required: true,
                            message: "Date Of Birth is required!",
                          },
                        ]}
                      >
                        <DatePicker
                          style={{borderColor: '#6b4d2e', color: '#6B120E', width:'100%', padding: '1rem'}} className="font-myLocalFont w-full hover:bg-transparent md:w-[496px] gradient-border bg-transparent h-[41px] md:h-[67px]  md:px-0 text-[12px] md:text-[24px]"
                       disabledDate={disableFutureDates} 
                          format={dateFormat}
                          suffixIcon={null}
                          showNow={false}
                          placeholder=""
                        />
                      </Form.Item>
                      <Form.Item
                        name="title_held"
                        label="What title do you hold?"
                        className="font-semibold"
                        rules={[
                          {
                            required: true,
                            message: "Position is required!",
                          },
                        ]}
                      >
                         <Select dropdownStyle={{backgroundColor: '#F4D36E', color: '#6B120E', boxShadow: '0px 4px 8px 0px #00000040'}} className="font-myLocalFont w-full hover:bg-transparent md:w-[496px] gradient-border bg-transparent h-[41px] md:h-[67px]  md:px-0 text-[12px] md:text-[24px]">
                         <Select.Option value="EST">EST</Select.Option>

                          <Select.Option value="LCP">LCP</Select.Option>
                          <Select.Option value="LCVP">LCVP</Select.Option>
                          <Select.Option value="TL">TL</Select.Option>
                          <Select.Option value="TM">TM</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        className="font-semibold w-full"
                        label="Is this your first hunt?"
                        name="first_hunt"
                        rules={[
                          {
                            required: true,
                            message: "Is this your first hunt?",
                          },
                        ]}
                      >
                         <Select dropdownStyle={{backgroundColor: '#F4D36E', color: '#6B120E', boxShadow: '0px 4px 8px 0px #00000040'}} className="font-myLocalFont w-full hover:bg-transparent md:w-[496px] gradient-border bg-transparent h-[41px] md:h-[67px]  md:px-0 text-[12px] md:text-[24px]">
                         <Select.Option value={true}>Yes</Select.Option>
                          <Select.Option value={false}>No</Select.Option>
                        </Select>
                      </Form.Item>
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      <Form.Item
                        className="font-semibold w-full"
                        name="have_allergies"
                        label="Do you have any Allergies?"
                        rules={[
                          {
                            required: true,
                            message: "Allergies is required!",
                          },
                        ]}
                      >
                          <Select dropdownStyle={{backgroundColor: '#F4D36E', color: '#6B120E', boxShadow: '0px 4px 8px 0px #00000040'}} className="font-myLocalFont w-full hover:bg-transparent md:w-[496px] gradient-border bg-transparent h-[41px] md:h-[67px]  md:px-0 text-[12px] md:text-[24px]">
                          <Select.Option value={true}>Yes</Select.Option>
                          <Select.Option value={false}>No</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="What is the treatment"
                        name="treatment"
                        className="font-semibold w-full"
                        rules={[
                          {
                            required: true,
                            message: "Treatment is required! Put N/A if none.",
                          },
                        ]}
                      >
                        <Input className="font-myLocalFont w-full active:bg-transparent hover:bg-transparent gradient-border bg-transparent h-[41px] md:h-[67px] px-2 py-3 md:px-3 text-[12px] md:text-[24px] text-[#6B120E]" />
                      </Form.Item>
                      <Form.Item
                        className="font-semibold w-full"
                        name="can_stay_with_opposite_sex"
                        label="Can you stay with the opposite sex?"
                        rules={[
                          {
                            required: true,
                            message: "This is required!",
                          },
                        ]}
                      >
                         <Select dropdownStyle={{backgroundColor: '#F4D36E', color: '#6B120E', boxShadow: '0px 4px 8px 0px #00000040'}} className="font-myLocalFont w-full hover:bg-transparent md:w-[496px] gradient-border bg-transparent h-[41px] md:h-[67px]  md:px-0 text-[12px] md:text-[24px]">
                         <Select.Option value={true}>Yes</Select.Option>
                          <Select.Option value={false}>No</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="Next of Kin’s contact"
                        name="next_kin_contact"
                        className="font-semibold w-full"
                        rules={[
                          {
                            required: true,
                            message: "Enter your emergency contact",
                          },
                          { validator: validatePhoneNumber },
                        ]}
                      >
                        <Input
                          className="font-myLocalFont w-full active:bg-transparent hover:bg-transparent gradient-border bg-transparent h-[41px] md:h-[67px] px-2 py-3 md:px-3 text-[12px] md:text-[24px] text-[#6B120E]"
                          type="tel"
                        />
                      </Form.Item>
                    </>
                  )}
                  {currentStep === 4 && (
                    <>
                      <Form.Item
                        name="next_kin_relationship"
                        label="Relationship with Kin?"
                        className="font-semibold w-full"
                        rules={[
                          {
                            required: true,
                            message: "This is required!",
                          },
                        ]}
                      >
                        <Input className="font-myLocalFont w-full active:bg-transparent hover:bg-transparent gradient-border bg-transparent h-[41px] md:h-[67px] px-2 py-3 md:px-3 text-[12px] md:text-[24px] text-[#6B120E]" />
                      </Form.Item>

                      <Form.Item
                        label="Any Suggestions?"
                        name="suggestions"
                        rules={[
                          {
                            required: true,
                            message: "This is required! Put N/A if none.",
                          },
                        ]}
                        className="font-semibold w-full"
                      >
                        <Input className="font-myLocalFont w-full active:bg-transparent hover:bg-transparent gradient-border bg-transparent h-[41px] md:h-[67px] px-2 py-3 md:px-3 text-[12px] md:text-[24px] text-[#6B120E]" />
                      </Form.Item>
                    </>
                  )}
                  <div className="mt-8 justify-center flex gap-8 ">
                    {/* <Form.Item> */}
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="button w-full  font-myLocalFont text-[20px] md:text-[24px] py-3 md:py-4 font-medium text-white text-left"
                      >
                        <LeftOutlined /> Go Back
                      </button>
                    )}
                    {currentStep < 4 && (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="button progress-btn text-[20px] md:text-[24px] w-full font-semibold text-white py-[14px] text-center"
                      >
                        Continue
                      </button>
                    )}
                    {currentStep === 4 && (
                      <button
                        type="submit"
                        className="button progress-btn font-sans tracking-tighter border rounded-[0px] text-[20px] md:text-[24px] w-full py-4 font-medium text-white text-center"
                      >
                        {isPending ? <Loading3QuartersOutlined spin /> : "Submit"}
                      </button>
                    )}
                    {/* </Form.Item> */}
                  </div>
                </Form>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
      {currentStep == 1 && (
        <div className=" w-1/2 text-center hidden md:flex flex-col justify-center">
          <div className="relative max-w-[45rem] mx-auto">
            <h1 className="font-externalFont font-medium tracking-tight text-[#6B120E] mx-auto text-[64px] leading-[90px]">
              Your journey to claim the Royal Bounty starts here...
            </h1>
          </div>
        </div>
      )}
      {currentStep == 2 && (
        <div className=" w-1/2 text-center hidden md:flex flex-col justify-center">
          <div className="relative max-w-[45rem] mx-auto">
            <h1 className="font-externalFont font-medium tracking-tight text-[#6B120E] mx-auto text-[64px] leading-[90px]">
              The Prize Awaits Those Who Prove Worthy...
            </h1>
          </div>
        </div>
      )}
      {currentStep == 3 && (
        <div className=" w-1/2 text-center hidden md:flex flex-col justify-center">
          <div className="relative max-w-[45rem] mx-auto">
            <h1 className="font-externalFont font-medium tracking-tight text-[#6B120E] mx-auto text-[64px] leading-[90px]">
              Your strength and wisdom will be tested...
            </h1>
          </div>
        </div>
      )}
      {currentStep == 4 && (
        <div className=" w-1/2 text-center hidden md:flex flex-col justify-center">
          <div className="relative max-w-[45rem] mx-auto">
            <h1 className="font-externalFont font-medium tracking-tight text-[#6B120E] mx-auto text-[64px] leading-[90px]">
              are you prepared?
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default FounderOnboarding;
