import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Card from 'react-bootstrap/lib/Card'
import { Formik } from 'formik'

const SignOneTwo = props => {
  return (
    <Formik
      onSubmit={console.log}
      validate={values => {
        let errors = {}
        props.save(values)
        if (!values.industry) {
          errors.industry = 'Required'
        }
        if (!values.major) {
          errors.major = 'Required'
        }
        if (!values.school) {
          errors.school = 'Required'
        }
        if (!values.year) {
          errors.year = 'Required'
        }
        return errors
      }}
      initialValues={{
        industry: props.form.industry,
        major: props.form.major,
        school: props.form.school,
        year: props.form.year
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        validateForm
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Industry</Form.Label>
              <Form.Control
                as="select"
                type="text"
                placeholder="Industry"
                name="industry"
                value={values.industry}
                onChange={handleChange}
                isInvalid={!!errors.industry}
              >
                <option>Choose...</option>
                <option value="Accounting">Accounting</option>
                <option value="Airlines/Aviation">Airlines/Aviation</option>
                <option value="Alternative Dispute Resolution">
                  Alternative Dispute Resolution
                </option>
                <option value="Alternative Medicine">
                  Alternative Medicine
                </option>
                <option value="Animation">Animation</option>
                <option value="Apparel & Fashion">Apparel & Fashion</option>
                <option value="Architecture & Planning">
                  Architecture & Planning
                </option>
                <option value="Arts and Crafts">Arts and Crafts</option>
                <option value="Automotive">Automotive</option>
                <option value="Aviation & Aerospace">
                  Aviation & Aerospace
                </option>
                <option value="Banking">Banking</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Broadcast Media">Broadcast Media</option>
                <option value="Building Materials">Building Materials</option>
                <option value="Business Supplies and Equipment">
                  Business Supplies and Equipment
                </option>
                <option value="Capital Markets">Capital Markets</option>
                <option value="Chemicals">Chemicals</option>
                <option value="Civic & Social Organization">
                  Civic & Social Organization
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Commercial Real Estate">
                  Commercial Real Estate
                </option>
                <option value="Computer & Network Security">
                  Computer & Network Security
                </option>
                <option value="Computer Games">Computer Games</option>
                <option value="Computer Hardware">Computer Hardware</option>
                <option value="Computer Networking">Computer Networking</option>
                <option value="Computer Software">Computer Software</option>
                <option value="Construction">Construction</option>
                <option value="Consumer Electronics">
                  Consumer Electronics
                </option>
                <option value="Consumer Goods">Consumer Goods</option>
                <option value="Consumer Services">Consumer Services</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Dairy">Dairy</option>
                <option value="Defense & Space">Defense & Space</option>
                <option value="Design">Design</option>
                <option value="Education Management">
                  Education Management
                </option>
                <option value="E-Learning">E-Learning</option>
                <option value="Electrical/Electronic Manufacturing">
                  Electrical/Electronic Manufacturing
                </option>
                <option value="Entertainment">Entertainment</option>
                <option value="Environmental Services">
                  Environmental Services
                </option>
                <option value="Events Services">Events Services</option>
                <option value="Executive Office">Executive Office</option>
                <option value="Facilities Services">Facilities Services</option>
                <option value="Farming">Farming</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Fine Art">Fine Art</option>
                <option value="Fishery">Fishery</option>
                <option value="Food & Beverages">Food & Beverages</option>
                <option value="Food Production">Food Production</option>
                <option value="Fund-Raising">Fund-Raising</option>
                <option value="Furniture">Furniture</option>
                <option value="Gambling & Casinos">Gambling & Casinos</option>
                <option value="Glass, Ceramics & Concrete">
                  Glass, Ceramics & Concrete
                </option>
                <option value="Government Administration">
                  Government Administration
                </option>
                <option value="Government Relations">
                  Government Relations
                </option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Health, Wellness and Fitness">
                  Health, Wellness and Fitness
                </option>
                <option value="Higher Education">Higher Education</option>
                <option value="Hospital & Health Care">
                  Hospital & Health Care
                </option>
                <option value="Hospitality">Hospitality</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Import and Export">Import and Export</option>
                <option value="Individual & Family Services">
                  Individual & Family Services
                </option>
                <option value="Industrial Automation">
                  Industrial Automation
                </option>
                <option value="Information Services">
                  Information Services
                </option>
                <option value="Information Technology and Services">
                  Information Technology and Services
                </option>
                <option value="Insurance">Insurance</option>
                <option value="International Affairs">
                  International Affairs
                </option>
                <option value="International Trade and Development">
                  International Trade and Development
                </option>
                <option value="Internet">Internet</option>
                <option value="Investment Banking">Investment Banking</option>
                <option value="Investment Management">
                  Investment Management
                </option>
                <option value="Judiciary">Judiciary</option>
                <option value="Law Enforcement">Law Enforcement</option>
                <option value="Law Practice">Law Practice</option>
                <option value="Legal Services">Legal Services</option>
                <option value="Legislative Office">Legislative Office</option>
                <option value="Leisure, Travel & Tourism">
                  Leisure, Travel & Tourism
                </option>
                <option value="Libraries">Libraries</option>
                <option value="Logistics and Supply Chain">
                  Logistics and Supply Chain
                </option>
                <option value="Luxury Goods & Jewelry">
                  Luxury Goods & Jewelry
                </option>
                <option value="Machinery">Machinery</option>
                <option value="Management Consulting">
                  Management Consulting
                </option>
                <option value="Maritime">Maritime</option>
                <option value="Market Research">Market Research</option>
                <option value="Marketing and Advertising">
                  Marketing and Advertising
                </option>
                <option value="Mechanical or Industrial Engineering">
                  Mechanical or Industrial Engineering
                </option>
                <option value="Media Production">Media Production</option>
                <option value="Medical Devices">Medical Devices</option>
                <option value="Medical Practice">Medical Practice</option>
                <option value="Mental Health Care">Mental Health Care</option>
                <option value="Military">Military</option>
                <option value="Mining & Metals">Mining & Metals</option>
                <option value="Motion Pictures and Film">
                  Motion Pictures and Film
                </option>
                <option value="Museums and Institutions">
                  Museums and Institutions
                </option>
                <option value="Music">Music</option>
                <option value="Nanotechnology">Nanotechnology</option>
                <option value="Newspapers">Newspapers</option>
                <option value="Non-Profit Organization Management">
                  Non-Profit Organization Management
                </option>
                <option value="Oil & Energy">Oil & Energy</option>
                <option value="Online Media">Online Media</option>
                <option value="Outsourcing/Offshoring">
                  Outsourcing/Offshoring
                </option>
                <option value="Package/Freight Delivery">
                  Package/Freight Delivery
                </option>
                <option value="Packaging and Containers">
                  Packaging and Containers
                </option>
                <option value="Paper & Forest Products">
                  Paper & Forest Products
                </option>
                <option value="Performing Arts">Performing Arts</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="Philanthropy">Philanthropy</option>
                <option value="Photography">Photography</option>
                <option value="Plastics">Plastics</option>
                <option value="Political Organization">
                  Political Organization
                </option>
                <option value="Primary/Secondary Education">
                  Primary/Secondary Education
                </option>
                <option value="Printing">Printing</option>
                <option value="Professional Training & Coaching">
                  Professional Training & Coaching
                </option>
                <option value="Program Development">Program Development</option>
                <option value="Public Policy">Public Policy</option>
                <option value="Public Relations and Communications">
                  Public Relations and Communications
                </option>
                <option value="Public Safety">Public Safety</option>
                <option value="Publishing">Publishing</option>
                <option value="Railroad Manufacture">
                  Railroad Manufacture
                </option>
                <option value="Ranching">Ranching</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Recreational Facilities and Services">
                  Recreational Facilities and Services
                </option>
                <option value="Religious Institutions">
                  Religious Institutions
                </option>
                <option value="Renewables & Environment">
                  Renewables & Environment
                </option>
                <option value="Research">Research</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Retail">Retail</option>
                <option value="Security and Investigations">
                  Security and Investigations
                </option>
                <option value="Semiconductors">Semiconductors</option>
                <option value="Shipbuilding">Shipbuilding</option>
                <option value="Sporting Goods">Sporting Goods</option>
                <option value="Sports">Sports</option>
                <option value="Staffing and Recruiting">
                  Staffing and Recruiting
                </option>
                <option value="Supermarkets">Supermarkets</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="Textiles">Textiles</option>
                <option value="Think Tanks">Think Tanks</option>
                <option value="Tobacco">Tobacco</option>
                <option value="Translation and Localization">
                  Translation and Localization
                </option>
                <option value="Transportation/Trucking/Railroad">
                  Transportation/Trucking/Railroad
                </option>
                <option value="Utilities">Utilities</option>
                <option value="Venture Capital & Private Equity">
                  Venture Capital & Private Equity
                </option>
                <option value="Veterinary">Veterinary</option>
                <option value="Warehousing">Warehousing</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Wine and Spirits">Wine and Spirits</option>
                <option value="Wireless">Wireless</option>
                <option value="Writing and Editing">Writing and Editing</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.industry}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Major</Form.Label>
              <Form.Control
                as="select"
                type="text"
                placeholder="Major"
                name="major"
                value={values.major}
                onChange={handleChange}
                isInvalid={!!errors.major}
              >
                <option>Choose...</option>
                <option value="Accounting">Accounting</option>
                <option value="Actuarial Science">Actuarial Science</option>
                <option value="Advertising">Advertising</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Agricultural and Biological Engineering">
                  Agricultural and Biological Engineering
                </option>
                <option value="Agricultural Business Management">
                  Agricultural Business Management
                </option>
                <option value="Agriculture Economics">
                  Agriculture Economics
                </option>
                <option value="Animal Bioscience">Animal Bioscience</option>
                <option value="Animal Sciences">Animal Sciences</option>
                <option value="Anthropology">Anthropology</option>
                <option value="Applied Mathematics">Applied Mathematics</option>
                <option value="Archaeology">Archaeology</option>
                <option value="Architectural Engineering">
                  Architectural Engineering
                </option>
                <option value="Architecture">Architecture</option>
                <option value="Art History">Art History</option>
                <option value="Studio Art">Studio Art</option>
                <option value="Art Education">Art Education</option>
                <option value="Biobehavioral Health">
                  Biobehavioral Health
                </option>
                <option value="Biochemistry">Biochemistry</option>
                <option value="Bioengineering">Bioengineering</option>
                <option value="Biology">Biology</option>
                <option value="Biophysics">Biophysics</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Business Administration and Management">
                  Business Administration and Management
                </option>
                <option value="Business Logistics">Business Logistics</option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Chemistry">Chemistry</option>
                <option value="Children">Children</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Computer Engineering">
                  Computer Engineering
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Crime, Law, and Justice">
                  Crime, Law, and Justice
                </option>
                <option value="Dance">Dance</option>
                <option value="Earth Sciences">Earth Sciences</option>
                <option value="Economics">Economics</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Elementary and Kindergarten Education">
                  Elementary and Kindergarten Education
                </option>
                <option value="Engineering Science">Engineering Science</option>
                <option value="English">English</option>
                <option value="Environmental Systems Engineering">
                  Environmental Systems Engineering
                </option>
                <option value="Environmental Sciences">
                  Environmental Sciences
                </option>
                <option value="Environmental Resource Management">
                  Environmental Resource Management
                </option>
                <option value="Film and Video">Film and Video</option>
                <option value="Finance">Finance</option>
                <option value="Food Science">Food Science</option>
                <option value="Forest Science">Forest Science</option>
                <option value="Forest Technology">Forest Technology</option>
                <option value="General Science">General Science</option>
                <option value="Geography">Geography</option>
                <option value="Geosciences">Geosciences</option>
                <option value="Graphic Design and Photography">
                  Graphic Design and Photography
                </option>
                <option value="Health and Physical Education">
                  Health and Physical Education
                </option>
                <option value="Health Policy and Administration">
                  Health Policy and Administration
                </option>
                <option value="History">History</option>
                <option value="Horticulture">Horticulture</option>
                <option value="Hotel, Restaurant, and Institutional Management">
                  Hotel, Restaurant, and Institutional Management
                </option>
                <option value="Human Development and Family Studies">
                  Human Development and Family Studies
                </option>
                <option value="Individual and Family Studies">
                  Individual and Family Studies
                </option>
                <option value="Industrial Engineering">
                  Industrial Engineering
                </option>
                <option value="Information Sciences and Technology">
                  Information Sciences and Technology
                </option>
                <option value="Journalism">Journalism</option>
                <option value="Kinesiology">Kinesiology</option>
                <option value="Landscape Architecture">
                  Landscape Architecture
                </option>
                <option value="Law Enforcement and Correction">
                  Law Enforcement and Correction
                </option>
                <option value="Marine Biology">Marine Biology</option>
                <option value="Marketing">Marketing</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Media Studies">Media Studies</option>
                <option value="Meteorology">Meteorology</option>
                <option value="Microbiology">Microbiology</option>
                <option value="Mineral Economics">Mineral Economics</option>
                <option value="Modern Languages">Modern Languages</option>
                <option value="Music Education">Music Education</option>
                <option value="Nuclear Engineering">Nuclear Engineering</option>
                <option value="Nursing">Nursing</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Physics">Physics</option>
                <option value="Physiology">Physiology</option>
                <option value="Political Science">Political Science</option>
                <option value="Pre-medicine">Pre-medicine</option>
                <option value="Psychology">Psychology</option>
                <option value="Public Relations">Public Relations</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Recreation and Parks">
                  Recreation and Parks
                </option>
                <option value="Rehabilitation Services">
                  Rehabilitation Services
                </option>
                <option value="Religious Studies">Religious Studies</option>
                <option value="Secondary Education">Secondary Education</option>
                <option value="Sociology">Sociology</option>
                <option value="Social Work">Social Work</option>
                <option value="Special Education">Special Education</option>
                <option value="Speech Communication">
                  Speech Communication
                </option>
                <option value="Speech Pathology and Audiology/Communication Disorder">
                  Speech Pathology and Audiology/Communication Disorder
                </option>
                <option value="Statistics">Statistics</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="Theater">Theater</option>
                <option value="Wildlife and Fishery Science">
                  Wildlife and Fishery Science
                </option>
                <option value="Wildlife Technology">Wildlife Technology</option>
                <option value="Women's Studies">Women's Studies</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.major}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>School</Form.Label>
              <Form.Control
                type="text"
                placeholder="CSULA"
                name="school"
                value={values.school}
                onChange={handleChange}
                isInvalid={!!errors.school}
              />
              <Form.Control.Feedback type="invalid">
                {errors.school}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Year</Form.Label>
              <Form.Control
                as="select"
                type="text"
                placeholder="Year"
                name="year"
                value={values.year}
                onChange={handleChange}
                isInvalid={!!errors.year}
              >
                <option>Choose...</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophmore">Sophmore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.year}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button
            variant="danger"
            onClick={props.param}
            style={{ marginRight: 10 }}
          >
            Back
          </Button>
          {/* <Button onClick={() => validateForm().then(() => props.pg)}>
            Next
          </Button> */}
          <Button onClick={() => validateForm().then(() => {props.submitToDB();console.log("in button")})}>Finish</Button>
        </Form>
      )}
    </Formik>
  )
}
export default SignOneTwo
