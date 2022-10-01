import axios from "axios";

// Load ALL countries from countries endpoint
let countries = [];
axios.get("https://restcountries.com/v3.1/all").then(function (response) {
  const countryInfo = response.data;
  for (const value of countryInfo.values()) {
    let country = value.name.common;
    countries.push(country);
  }

  // Sort in alphabetical order
  countries.sort();
});

const styles = {
  button:
    "py-[10px] px-[32px] bg-brand-primary text-white rounded-[8px] hover:bg-brand-secondary transition:colors duration-500",
  buttonOutline:
    "py-[10px] px-[32px] bg-inherit text-brand-primary hover:text-white rounded-[8px] hover:bg-brand-primary transition:colors duration-500 border border-brand-primary",
  stepFormCont: "w-[16.67%] shrink-0 gs_slide px-2",
  stepFormHeading: "font-bold text-[20px] mb-4 md:mb-[56px]",
  stepFormHBox: "border border-[#CACACA] py-[40px] mb-[40px] max-w-[700px] mx-auto",
  stepFormVBox:
    "flex flex-col md:flex-row border border-[#CACACA] mb-[40px] max-w-[700px] mx-auto py-[40px] md:py-0",
  radioLabel: "flex items-center gap-[12px] border-b px-[16px] md:px-[40px] pb-[40px] mb-[40px]",
  radioLabel2: "flex items-center gap-[12px] px-[16px] md:px-[40px]",
  radioLabel3: "flex items-center gap-[12px] px-[16px] md:px-[40px] mb-[20px]",
  radioGroup: "md:border-r md:py-[40px] w-full md:w-1/2",
  radioGroup2: "md:py-[40px] w-full md:w-1/2",
  skipNext: "flex justify-end items-center gap-[16px] max-w-[700px] mx-auto",
  dbNavItem:
    "flex gap-[12px] items-center px-4 py-2 bg-white text-brand-gray hover:bg-brand-gray-200 hover:text-brand-primary hover:border-l-[4px] hover:border-brand-primary hover:cursor-pointer transition-colors duration-500 mb-[10px]",
};

export { styles, countries };
