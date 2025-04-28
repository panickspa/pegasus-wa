import { config } from 'dotenv'
config()
export const default_domain = process.env.DEFAULT_DOMAIN;
export const apiKey = process.env.BPS_API_KEY;
export const version = process.env.API_VERSION;
const currentDate = new Date();

const optVal = (e) => (e[1] ? `${e[0]}/${e[1]}/` : '');


/**
 * @typedef RequestApi
 * @property {string} domain
 * @property {string} lang
 * @property {number} page
 * @property {string} month
 * @property {string} year
 * @property {string} keyword
 * @property {apiKey} string
 */

/**
 * @typedef {object} variabel
 * @property {string | number} val - The value of the variable.
 * @property {string | number} label - The label of the variable.
 * @property {string | number} id - The ID of the variable.
 * @property {string} unit - The unit of the variable.
 * @property {string} subj - The subject of the variable.
 * @property {string} def - The definition of the variable.
 * @property {string | number} decimal - The number of decimal places for the variable.
 * @property {string} note - A note about the variable.
 */

/**
 * @typedef {object} turvar
 * @property {string | number} val - The value.
 * @property {string | number} label - The label.
 */

/**
 * @typedef {object} variable
 * @property {number} var_id - The ID of the variable.
 * @property {string} kategori_data - The data category.
 * @property {string} judul - The title.
 * @property {string} satuan - The unit of measurement.
 * @property {string} wilayah - The region or area.
 * @property {string} domain - The domain of the variable.
 * @property {string} var_id_domain - The domain-specific variable ID.
 */

/**
 * @typedef {object} Paginations
 * @property {number} page - The current page number.
 * @property {number} per_page - The number of items per page.
 * @property {number} pages - The total number of pages.
 * @property {number} count - The number of items in the current response.
 * @property {number} total - The total number of items.
 */

/**
 * @typedef {object} VarObject
 * @property {number} var_id - The variable ID.
 * @property {string} title - The title of the variable.
 * @property {number} sub_id - The sub-category ID.
 * @property {string} sub_name - The name of the sub-category.
 * @property {string} def - The definition of the variable.
 * @property {string} notes - Additional notes about the variable.
 * @property {number} vertical - The vertical category (likely an ID).
 * @property {string} unit - The unit of measurement.
 * @property {number} graph_id - The ID of the associated graph.
 * @property {string} graph_name - The name of the associated graph.
 */

/**
 * @typedef {object} VarApi
 * @property {string | 'OK'} status - The status of the API response.
 * @property {string | 'available'} data-availability - Indicates if the data is available.
 * @property {Array<Paginations, Array<VarObject>>} data - An array containing pagination information and an array of VarObject.
 */

/**
 * @typedef {object} VarResp
 * @property {number} val - The value.
 * @property {string} label - The label.
 * @property {string} unit - The unit of measurement.
 * @property {string} subj - The subject.
 * @property {string} def - The definition.
 * @property {string} decimal - The number of decimal places.
 * @property {string} note - Additional notes.
 */


/**
 * @typedef {object} DataResponse
 * @property {string | 'OK'} status - The status of the data response.
 * @property {string | 'available'} data-availability - Indicates if the data is available.
 * @property {Array<VarResp>} var - An array of VarResp objects.
 * @property {Array<turvar>} turvar - An array of turvar objects.
 * @property {string} labelvervar - A string representing the label version of var.
 * @property {Array<turvar>} vervar - Another array of turvar objects.
 * @property {Array<turvar>} tahun - An array representing years (turvar objects).
 * @property {Array<turvar>} turtahun - Another array representing years (turvar objects).
 * @property {object.<string, number>} datacontent - An object where keys are strings and values are numbers.
 */

/**
 * Optional Value of parameter request
 * @param {Array<string>} e 
 * @returns {Array<string>}
 */
const optValNum = (e) =>
  e[1] > -1 ? `${e[0]}/${e[1]}/` : '';

/**
 * Publication
 * @typedef {object} Publication
 * @property {string} pub_id
 * @property {string} title
 * @property {string} kat_no
 * @property {string} pub_no
 * @property {string} issn
 * @property {string} abstract
 * @property {string} sch_date
 * @property {string} rl_date
 * @property {string} updt_date
 * @property {string} cover
 * @property {string} pdf
 * @property {string} size
 */

/**
 * Publication Response
 * @typedef {object} PublicationResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Publication} data
 */

/**
 * Get publication api
 * @async
 * @param {RequestApi} req 
 * @returns {Promise<PublicationResponse,Error>}
 */
export const getPublication = (
  req = {
    domain: default_domain,
    lang: 'ind',
    page: 0,
    month: '',
    year: '',
    keyword: '',
    apiKey: '',
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/publication/domain/${
      req.domain
    }/${optVal(['page', req.page])}${optVal(['lang', req.lang])}${optVal([
      'month',
      req.month,
    ])}${optVal(['year', req.year])}${optVal(['keyword', req.keyword])}key/${
      req.apiKey
    }`,
  )
    .then(resp => resp.json())
    .catch(err => err);
export const getDetPublication = (
  req = {
    domain: default_domain,
    lang: 'ind',
    id: 'REQUIRED',
    apiKey: '',
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/view/model/publication/domain/${req.domain}/lang/${req.lang}/id/${req.id}/key/${req.apiKey}/`,
  )
    .then(resp => resp.json())
    .catch(err => err);

/**
 * Subject
 * @typedef {object} Subject
 * @property {number} sub_id
 * @property {string} title
 * @property {number} subcat_id
 * @property {string} subcat
 * @property {string|null} ntabel
 */

/**
 * Subject Response
 * @typedef {object} SubjectResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Array<Paginations, Subject>}
 */

/**
 * Get Subject
 * @async
 * @param {RequestApi} req 
 * @returns {SubjectResponse}
 */
export const getSubject = (req) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/subject/domain/${
      req.domain
    }/${optVal(['lang', req.lang])}${optValNum(['subcat', req.subcat])}${optVal(
      ['page', req.page],
    )}key/${apiKey}/`,
  ).then(r => r.json());

/**
 * Variable
 * @typedef {object} Variable
 * @property {number} var_id
 * @property {string} title
 * @property {number} sub_id
 * @property {string} sub_name
 * @property {string} ntabel
 * @property {string} def
 * @property {string} notes
 * @property {number} vertical
 * @property {string} unit
 * @property {number} graph_id
 * @property {string} graph_name
 */

/**
 * Variable Response
 * @typedef {object} VariableResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Array<Paginations, Variable>}
 */

/**
 * Get Variable
 * @async
 * @param {RequestApi} req 
 * @returns {SubjectResponse}
 */

export const getVar = (
  req = {
    domain: default_domain,
    page: 0,
    year: currentDate.getFullYear(),
    area: '',
    vervar: '',
    subject: 0,
    apiKey: apiKey,
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/var/domain/${
      req.domain
    }/${req.subject ? `subject/${req.subject}/` : ''}${optVal([
      'page',
      req.page,
    ])}${optVal(['year', req.year])}${optVal(['area', req.area])}${optVal([
      'vervar',
      req.vervar,
    ])}key/${req.apiKey}/`,
  ).then(r => r.json());

/**
 * Subject Category
 * @typedef {object} SubjectCategory
 * @property {number} subcat_id
 * @property {string} title
 */

/**
 * Subject Category Response
 * @typedef {object} SubjectCategoryResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Array<Paginations, Subject>}
 */

/**
 * Get Subject Category
 * @async
 * @param {RequestApi} req 
 * @returns {SubjectCategoryResponse}
 */

export const getSubCat = (
  req = {
    domain: default_domain,
    lang: 'ind',
    page: 0,
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/subcat/domain/${
      req.domain
    }/${optVal(['lang', req.lang])}${optVal(['page', req.page])}key/${apiKey}`,
  ).then(r => r.json());

/**
 * Vertical Variable
 * @typedef {object} VerticalVariable
 * @property {number} vervar_id
 * @property {string} vervar
 * @property {number} item_ver_id
 * @property {number} group_ver_id
 * @property {string} name_group_ver_id
 */

/**
 * Vertical Variable Response
 * @typedef {object} VerticalVariableResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Array<Paginations, VerticalVariable>}
 */

/**
 * Get Vertical Variable
 * @async
 * @param {RequestApi} req 
 * @returns {VerticalVariableResponse}
 */

export const getVervar = (
  req = {
    domain: default_domain,
    var: '',
    page: 0,
    apiKey: apiKey,
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/vervar/domain/${
      req.domain
    }/${optVal(['var', req.var])}${optVal(['page', req.page])}key/${
      req.apiKey
    }/`,
  ).then(r => r.json());

/**
 * Period Data
 * @typedef {object} Period
 * @property {number} th_id
 * @property {string} th
 */

/**
 * Period Data Response
 * @typedef {object} PeriodResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Array<Paginations, Period>}
 */

/**
 * Get Period Data
 * @async
 * @param {RequestApi} req 
 * @returns {PeriodResponse}
 */

export const getPeriodData = (
  req = {
    domain: default_domain,
    var: '',
    page: 0,
    apiKey: apiKey,
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/th/domain/${
      req.domain
    }/${optVal(['var', req.var])}${optVal(['page', req.page])}key/${
      req.apiKey
    }/`,
  ).then(r => r.json());

  /**
 * Derived Period Data
 * @typedef {object} DerivedPeriod
 * @property {number} turth_id
 * @property {string} turth
 * @property {number} group_turth_id
 * @property {string} name_group_turth
 */

/**
 * Derived Period Data Response
 * @typedef {object} DerivedPeriodResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Array<Paginations, DerivedPeriod>}
 */

/**
 * Get Derived Period Data
 * @async
 * @param {RequestApi} req 
 * @returns {DerivedPeriodResponse}
 */
export const getDerPeriodData = (
  req = {
    domain: default_domain,
    var: '',
    page: 0,
    apiKey: apiKey,
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/turth/domain/${
      req.domain
    }/${optVal(['var', req.var])}${optVal(['page', req.page])}key/${apiKey}/`,
  ).then(r => r.json());

export const getDerVar = (
  req = {
    domain: default_domain,
    var: '',
    page: 0,
    apiKey: apiKey,
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/turvar/domain/${
      req.domain
    }/${optVal(['var', req.var])}${optVal(['page', req.page])}key/${apiKey}/`,
  );

/**
 * Get Derived Period Data
 * @async
 * @param {RequestApi} req 
 * @returns {DataResponse}
 */
export const getDynData = (
  req = {
    domain: default_domain,
    var: '',
    turvar: 0,
    vervar: 0,
    th: 0,
    turth: 0,
    apiKey: apiKey,
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/data/lang/ind/domain/${
      req.domain
    }/var/${req.var}/${optVal(['turvar', req.turvar])}${optVal([
      'vervar',
      req.vervar,
    ])}${optVal(['th', req.th])}${optVal(['turth', req.turth])}key/${apiKey}/`,
  )
    .then(r => r.json())
    .catch(err => err);

 /**
 * Press Release
 * @typedef {object} PressRelease
 * @property {number} brs_id
 * @property {string} title
 * @property {string} abstract
 * @property {string} abstract
 * @property {string} rl_date
 * @property {string} updt_date
 * @property {string} pdf - link  
 * @property {string} size
 */

/**
 * Press Release Response
 * @typedef {object} PressReleaseResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {PressRelease} data
 */

/**
 * 
 * @param {string} domain 
 * @param {string} id 
 * @param {string} versions 
 * @param {string} apiKeys 
 * @returns {}
 */
export const getPressReleaseDetail = (
  domain,
  id,
  versions,
  apiKeys,
) =>
  fetch(
    `https://webapi.bps.go.id/${versions}/api/view/domain/${domain}/model/pressrelease/lang/ind/id/${id}/key/${apiKeys}/`,
  )
    .then(resp => resp.json())
    .catch(err => err);

/**
 * Press Release Response
 * @typedef {object} PressReleaseListResponse
 * @property {string} status
 * @property {string} data-availability
 * @property {Array<Paginations, PressRelease>} data
 */

/**
 * 
 * @param {RequestApi} req 
 * @returns {PressReleaseListResponse}
 */

export const getPressReleaseList = (
  req = {
    domain: default_domain,
    page: 1,
    apiKey: apiKey,
    version: version,
    keyword: '',
  },
) =>
  fetch(
    `https://webapi.bps.go.id/${
      req.version ? req.version : version
    }/api/list/model/pressrelease/lang/ind/domain/${req.domain}/${
      req.keyword ? `keyword/${req.keyword}/` : ''
    }${optValNum(['page', req.page])}key/${req.apiKey}/`,
  )
    .then(resp => {
      // console.log(resp._bodyBlob);
      return resp.json();
    })
    .catch(err => err);