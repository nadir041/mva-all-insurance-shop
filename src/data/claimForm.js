// Lead form definition. Field `name`s and `id`s match the original site exactly
// so the existing backend (/mva.aspx) keeps working.

export const claimFormCopy = {
  title: 'Get Your Free Case Review',
  intro: 'Tell us about your accident and our team will reach out to guide you through the next steps.',
  submit: 'Submit',
  sending: 'Submitting…',
  success: 'Thank you! Your claim has been submitted.',
  failure: 'An error occurred. Please try again.',
  partnersUrl: '/marketing-partners',
};

export const STATES = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['CA', 'California'],
  ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['DC', 'District of Columbia'],
  ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'],
  ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'],
  ['ME', 'Maine'], ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
  ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'],
  ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'],
  ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'], ['OK', 'Oklahoma'], ['OR', 'Oregon'],
  ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'], ['SD', 'South Dakota'],
  ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'],
  ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
  ['AS', 'American Samoa'], ['GU', 'Guam'], ['MP', 'Northern Mariana Islands'], ['PR', 'Puerto Rico'],
  ['VI', 'U.S. Virgin Islands'],
];

const YES_NO = ['Yes', 'No'];

const INJURY_TYPES = [
  'Anxiety', 'Back or Neck Pain', 'Brain Injury', 'Broken Bones', 'Cuts and Bruises', 'Headaches',
  'Loss of Life', 'Loss of Limb', 'Memory Loss', 'No Injury', 'Spinal Cord Injury or Paralysis',
  'Whiplash', 'Other',
];

const INCIDENT_RANGES = [
  'Within 1 Year', 'Within 2 Years', 'Within 3 Years', 'Within 4 Years', 'Within 5 Years',
  'Within 6 Years', 'Greater Than 6 Years',
];

/**
 * `span: 2` = full row on wide layouts. `placeholder` for selects is the original
 * disabled first option text. `hint` appears as the input placeholder while focused.
 */
export const FIELDS = [
  { name: 'txtFN', label: 'First Name', autoComplete: 'given-name', error: 'Please enter your first name.' },
  { name: 'txtLN', label: 'Last Name', autoComplete: 'family-name', error: 'Please enter your last name.' },
  { name: 'txtaddr', label: 'Address', autoComplete: 'street-address', span: 2, error: 'Please enter your address.' },
  { name: 'txtcity', label: 'City', autoComplete: 'address-level2', error: 'Please enter your city.' },
  {
    name: 'txtState', label: 'State', type: 'select', placeholder: 'Select State', options: STATES,
    autoComplete: 'address-level1', error: 'Please select your state.',
  },
  {
    name: 'ZipCode', label: 'Zip Code', autoComplete: 'postal-code', inputMode: 'numeric', maxLength: 10,
    hint: '5-digit ZIP', error: 'Please enter a valid 5-digit ZIP code.', validate: 'zip',
  },
  {
    name: 'DOB', id: 'txtDOB', label: 'Date of Birth', hint: 'MM/DD/YYYY', inputMode: 'numeric', maxLength: 10,
    autoComplete: 'bday', error: 'Please enter a valid date of birth (MM/DD/YYYY).', validate: 'dob', format: 'date',
  },
  {
    name: 'txtPhone', label: 'Phone Number', type: 'tel', autoComplete: 'tel', inputMode: 'tel',
    error: 'Please enter a valid 10-digit phone number.', validate: 'phone',
  },
  {
    name: 'txtEmail', label: 'Email', type: 'email', autoComplete: 'email',
    error: 'Please enter a valid email address.', validate: 'email',
  },
  {
    name: 'ddlHaveAttorney', label: 'Have Attorney', type: 'select', placeholder: 'Have Attorney', options: YES_NO,
    error: 'Please tell us whether you have an attorney.', group: 'accident',
  },
  {
    name: 'injuryT', label: 'Injury Type', type: 'select', placeholder: 'Injury Type', options: INJURY_TYPES,
    error: 'Please select an injury type.', group: 'accident',
  },
  {
    name: 'ddlDoctorTreatment', label: 'Doctor Treatment', type: 'select', placeholder: 'Doctor Treatment', options: YES_NO,
    error: 'Please tell us whether you received treatment.', group: 'accident',
  },
  {
    name: 'ddlIncidentDate', label: 'Incident Date Range', type: 'select', placeholder: 'Incident Date Range',
    options: INCIDENT_RANGES, error: 'Please select when the incident happened.', group: 'accident',
  },
];

export const CONSENT = {
  name: 'leadid_tcpa_disclosure',
  error: 'Please check the box to provide your consent.',
};
