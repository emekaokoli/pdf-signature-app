export type Country = {
  id: string;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  active: number;
  capital: string;
  created_at: string;
  currency: string;
  currency_symbol: string;
  emoji: string;
  emojiU: string;
  latitude: string;
  longitude: string;
  native: string;
  phone_code: string;
  region: string;
  tld: string;
  updated_at: string;
};

export type State = {
  country_id: string;
  created_at: string;
  deleted_at: string | null;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  state_code: string;
  type: string;
  updated_at: string;
  
};

export type Userprofile = {
  access_locker_documents: boolean;
  address: string;
  avatar: string | null;
  bvn: string;
  city: string | null;
  country: Country;
  created_at: string;
  dob: string;
  drivers_license_no: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  identity_number: string;
  identity_type: string;
  image: string;
  initials: string;
  ip_address: string;
  is_business: boolean;
  is_complete: null;
  is_online: boolean;
  last_name: string;
  national_verification: boolean;
  nin: string;
  permissions: Array<any>; // uses any here because I dont lknow what it is.
  phone: string;
  role: Array<string>;
  state: State;
  system_verification: boolean;
  updated_at: string;
};

export type UserTable = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  image: string;
  created_at: string;
};

export type PdfData = {
  all_participants_has_signed: boolean;
  completed_file_request: null | any;
  created_at: string;
  deleted_at: null | string;
  document_owner: string;
  entry_point: string;
  id: string;
  is_a_signlink_docs: boolean;
  is_a_template: boolean;
  is_the_owner_of_document: boolean;
  parent_id: null | string;
  participants_count: number;
  public: boolean;
  seals_count: number;
  signed_signatures: null | any;
  status: string;
  title: string;
  tools_count: number;
  updated_at: string;
  uploads_count: number;
};


export type DocumentUpload = {
  id: string;
  type: string;
  file: string;
  file_url: string;
  status: string;
  number_ordering: number | null;
  page_type: string | null;
  page_width: string | null;
  page_height: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}