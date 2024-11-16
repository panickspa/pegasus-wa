export const default_domain = '7106';
export const apiKey = '23b53e3e77445b3e54c11c60604350bf';
export const version = 'v1';
const currentDate = new Date();

const optVal = (e) => (e[1] ? `${e[0]}/${e[1]}/` : '');

const optValNum = (e) =>
  e[1] > -1 ? `${e[0]}/${e[1]}/` : '';
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

export const getSubject = (req) =>
  fetch(
    `https://webapi.bps.go.id/${version}/api/list/model/subject/domain/${
      req.domain
    }/${optVal(['lang', req.lang])}${optValNum(['subcat', req.subcat])}${optVal(
      ['page', req.page],
    )}key/${apiKey}/`,
  ).then(r => r.json());

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

/* exported method */
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