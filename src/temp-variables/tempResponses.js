const getAssignmentsForReviewer_response = [
  {
    App_Id: "c8d211cc-db58-496f-a267-ccc863dc2ea1",
    CompanyName: "Test2",
    Assignment_Id: "26cac3e2-5f79-4540-9f6a-c6e35fdc0357",
    Acceptance: "false",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "assigned",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
  {
    App_Id: "cd17bdea-9973-400d-9c97-91e2a061a685",
    CompanyName: "Test3",
    Assignment_Id: "015e56fb-c70b-4e28-b449-7f520c708af9",
    Acceptance: "false",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "assigned",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
  {
    App_Id: "3489ac51-00f1-495f-9edb-f3dca0366e17",
    CompanyName: "Test4",
    Assignment_Id: "1398d0cb-cd0a-4481-8336-78580f0172c0",
    Acceptance: "false",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "assigned",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
  {
    App_Id: "89217aea-93d0-4c3f-b0dd-a4311f7d1b70",
    CompanyName: "Test5",
    Assignment_Id: "3b027fba-8e63-4a42-8034-617323516b95",
    Acceptance: "false",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "assigned",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
  {
    App_Id: "9979d98d-e12d-4843-9014-907a6c5bca06",
    CompanyName: "Test1",
    Assignment_Id: "24f4db5f-1d42-4e6f-bd36-c1292e6f4a01",
    Acceptance: "true",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "reviewed",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "6add0b9e-7529-4905-8b06-16423b261cc2",
    Acceptance: "true",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "reviewed",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
];

const getApplications_response = [
  {
    App_Id: "c8d211cc-db58-496f-a267-ccc863dc2ea1",
    CompanyName: "Test2",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "cd17bdea-9973-400d-9c97-91e2a061a685",
    CompanyName: "Test3",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "3489ac51-00f1-495f-9edb-f3dca0366e17",
    CompanyName: "Test4",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "89217aea-93d0-4c3f-b0dd-a4311f7d1b70",
    CompanyName: "Test5",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "9a910862-c87d-41ea-bedc-cbd54a4a3c5d",
    CompanyName: "Test6",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "21ce632e-68ce-4866-a390-961bbdf85391",
    CompanyName: "Test7",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "28094450-5d2a-4998-af68-7e3d7e89c53f",
    CompanyName: "Test8",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "70785c7a-c023-4131-89b7-644a15728795",
    CompanyName: "Test9",
    Acceptance: "true",
    Stage: "submitted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "9979d98d-e12d-4843-9014-907a6c5bca06",
    CompanyName: "Test1",
    Acceptance: "true",
    Stage: "granted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Acceptance: "true",
    Stage: "accepted",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
];

const getAssignmentsForAdmin_response = [
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "64b5c849-e019-4818-9ba3-f994d16c808c",
    Acceptance: "false",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "assigned",
    Admin: "Admin1",
    Reviewer: "Reviewer6",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "e7e986e3-2310-4dc3-ad22-4ae62cb0f2cf",
    Acceptance: "false",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "assigned",
    Admin: "Admin1",
    Reviewer: "Reviewer7",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "6add0b9e-7529-4905-8b06-16423b261cc2",
    Acceptance: "true",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "reviewed",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "8ff23d21-c913-4247-b3dc-fdff9186ee47",
    Acceptance: "true",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "reviewed",
    Admin: "Admin1",
    Reviewer: "Reviewer2",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "0a41f8ff-7515-4e56-b464-34992bf6ae36",
    Acceptance: "true",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "reviewed",
    Admin: "Admin1",
    Reviewer: "Reviewer3",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "b8cfdf2b-6542-4f6f-960b-401e3e275c70",
    Acceptance: "true",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "reviewed",
    Admin: "Admin1",
    Reviewer: "Reviewer4",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    CompanyName: "Test",
    Assignment_Id: "05531634-82e0-45a6-827e-2798fbc921ac",
    Acceptance: "true",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "reviewed",
    Admin: "Admin1",
    Reviewer: "Reviewer5",
  },
];

const getAdmins_response = [
  {
    Username: "Admin1",
    Id: "5a9c53fc-7d75-415e-bf55-dd0687735fa8",
  },
  {
    Username: "Admin0",
    Id: "2ede78cd-b9e0-448a-b36c-4512bc8380cf",
  },
  {
    Username: "Admin2",
    Id: "5e4d219a-0a21-40be-b519-235b65163f03",
  },
  {
    Username: "Admin3",
    Id: "22aef1e7-66ea-4115-a878-00918da68ac4",
  },
  {
    Username: "Admin4",
    Id: "2236dfee-a1cf-4f95-b181-64f08e7ec036",
  },
  {
    Username: "Admin5",
    Id: "9dc466bc-a253-473c-ab64-d2f89f787d0e",
  },
  {
    Username: "Admin6",
    Id: "c68c403d-b32f-4095-a295-5a72afc03f61",
  },
  {
    Username: "Admin7",
    Id: "ccc4ee62-0477-46f9-aa29-4f17c659f252",
  },
  {
    Username: "Admin8",
    Id: "0deab1d5-f825-42a6-bed3-ff6073af329e",
  },
  {
    Username: "Admin9",
    Id: "89cc082a-261c-40c8-b536-b7c0f7e36916",
  },
];

const getReviewers_response = [
  {
    Username: "Reviewer1",
    Id: "4d02d41a-c50e-40b4-aa8f-6dbf0f4c0ed0",
  },
  {
    Username: "Reviewer0",
    Id: "f0292ea5-5795-42db-b38f-6d0c61deff1d",
  },
  {
    Username: "Reviewer2",
    Id: "10a60e48-17e0-43a3-8566-49cf8a5b7af4",
  },
  {
    Username: "Reviewer3",
    Id: "660819cb-06b0-4a6c-8a8c-cfb9ed779a5a",
  },
  {
    Username: "Reviewer4",
    Id: "9e010223-8d6f-4aee-811b-04b787fbfa59",
  },
  {
    Username: "Reviewer5",
    Id: "57ab08f0-8767-4735-a3ba-e9529e6d6b27",
  },
  {
    Username: "Reviewer6",
    Id: "f4ff2aa3-8bc9-4371-81da-e0cc5318e618",
  },
  {
    Username: "Reviewer7",
    Id: "c7446cad-8c7f-438b-b706-abe49771a9e5",
  },
  {
    Username: "Reviewer8",
    Id: "7bd56dd1-e775-4ff3-a20b-e95cb7c71bf9",
  },
  {
    Username: "Reviewer9",
    Id: "8fc30f3c-ab7c-4acf-9ac7-26eb5c93af9e",
  },
  {
    Username: "Reviewer10",
    Id: "8845443a-d478-4674-bd95-506f6fd86a89",
  },
  {
    Username: "Reviewer23",
    Id: "dae744af-0292-4e05-8a67-0fc16235f6c4",
  },
];
const getFeedback_response = [
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    Comment: "good",
    CompanyName: "Test",
    From: "Reviewer1",
    To: "Admin1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    Comment: "good",
    CompanyName: "Test",
    From: "Reviewer1",
    To: "Admin1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    Comment: "good",
    CompanyName: "Test",
    From: "Reviewer2",
    To: "Admin1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    Comment: "good",
    CompanyName: "Test",
    From: "Reviewer3",
    To: "Admin1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    Comment: "good",
    CompanyName: "Test",
    From: "Reviewer4",
    To: "Admin1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    Comment: "good",
    CompanyName: "Test",
    From: "Reviewer5",
    To: "Admin1",
  },
  {
    App_Id: "eef17c5f-8cf1-4813-a4d7-28c73d06d1a1",
    Comment: "good",
    CompanyName: "Test",
    From: "Reviewer6",
    To: "Admin1",
  },
];
const getLicences_response = [
  {
    App_Id: "9979d98d-e12d-4843-9014-907a6c5bca06",
    CompanyName: "Test1",
    Validity: "false",
    Expire_Date: "2018-09-04T10:44:46",
    Licence_Id: "a4abbb52-2b4d-4157-81a2-f0046c48fdfa",
    Admin: "Admin1",
    Applicant: "Applicant1",
  },
];
const getFeedbackForApplicant_response = [
  {
    App_Id: "9979d98d-e12d-4843-9014-907a6c5bca06",
    Comment: "Admin Comment: good, Reviewer Comments: 1) good,2) ",
    CompanyName: "Test1",
    From: "Admin1",
    To: "Applicant1",
  },
];

const getAssignmentsForCompanyName_response = [
  {
    App_Id: "c8d211cc-db58-496f-a267-ccc863dc2ea1",
    CompanyName: "Test2",
    Assignment_Id: "26cac3e2-5f79-4540-9f6a-c6e35fdc0357",
    Acceptance: "false",
    Expire_Date: "2024-04-05T14:51:00.608",
    Stage: "assigned",
    Admin: "Admin1",
    Reviewer: "Reviewer1",
  },
];

export {
  getAdmins_response,
  getApplications_response,
  getAssignmentsForAdmin_response,
  getAssignmentsForReviewer_response,
  getFeedbackForApplicant_response,
  getFeedback_response,
  getLicences_response,
  getReviewers_response,
  getAssignmentsForCompanyName_response,
};
