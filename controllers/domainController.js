const Domain = require("../models/DomainModel");

// Client APIs
exports.isDomainActive = async (req, res) => {
  try {
    const origin = req.headers.origin;
    const domainName = origin.split('//')[1].split(':')[0];
    const subDomain = domainName.split('.')[0];
    let domain;
    if (subDomain == 'cloud'){
      return res.status(400).json({ message: "You will be redirected to Registration Page in 5 Seconds" });
    }
    if (subDomain == 'localhost'){
      return res.status(200).json({ message: "Working on dev server", domain: {subDomain: 'localhost', isOnHold: false}});
    }
    domain = await Domain.findOne({subDomain: subDomain});
    if (!domain) {
      return res.status(400).json({ message: `${subDomain}.build-mate is not registered with us. You will be redirected to Registration Page in 5 Seconds` });
    }
    // Sending domain object
    return res
      .status(200)
      .json({ message: "Domain Exists", domain});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error, message: error?.message });
  }
};
