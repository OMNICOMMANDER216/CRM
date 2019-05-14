import React from 'react';
import { Col, FormGroup, FormText, Input, Label, } from 'reactstrap';

export default ({customer, onChange, errors }) => {
  return (
    <React.Fragment>
      <FormGroup row >
          <Col md="3">
            <Label>Services</Label>
          </Col>
          <Col md="9">
            <FormGroup check inline>
              <Input 
                className="form-check" 
                type="checkbox" 
                id="website" 
                name="website" 
                onChange={onChange} 
                value="website" 
                checked={customer && customer.services && (customer.services.includes("website"))}/>
                <Label className="form-check-label" check htmlFor="website">Website</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input 
                className="form-check" 
                type="checkbox" 
                id="social-media" 
                name="social-media" 
                onChange={onChange} 
                value="social-media" 
                checked={customer && (customer.services.includes("social-media"))}/>
                <Label className="form-check-label" check htmlFor="social-media">Social Media</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input 
                className="form-check" 
                type="checkbox" 
                id="email" 
                name="email" 
                onChange={onChange} 
                value="email" 
                checked={customer && (customer.services.includes("email"))}/>
                <Label className="form-check-label" check htmlFor="email">Email</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input 
                className="form-check" 
                type="checkbox" 
                id="live-chat" 
                name="live-chat" 
                onChange={onChange} 
                value="live-chat" 
                checked={customer && (customer.services.includes("live-chat"))}/>
                <Label className="form-check-label" check htmlFor="live-chat">Live Chat</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input 
                className="form-check" 
                type="checkbox" 
                id="branding" 
                name="branding" 
                onChange={onChange} 
                value="branding" 
                checked={customer && (customer.services.includes("branding"))}/>
                <Label className="form-check-label" check htmlFor="branding">Branding</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input 
                className="form-check" 
                type="checkbox" 
                id="promet" 
                name="promet" 
                onChange={onChange} 
                value="promet" 
                checked={customer && (customer.services.includes("promet"))}/>
                <Label className="form-check-label" check htmlFor="promet">Promet</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input 
                className="form-check" 
                type="checkbox" 
                id="form-stack" 
                name="form-stack" 
                onChange={onChange} 
                value="form-stack" 
                checked={customer && (customer.services.includes("form-stack"))}/>
                <Label className="form-check-label" check htmlFor="form-stack">Form Stack</Label>
            </FormGroup>

           <FormGroup check inline>
             <Input 
               className="form-check" 
               type="checkbox" 
               id="logo" 
               name="logo" 
               onChange={onChange} 
               value="logo" 
               checked={customer && (customer.services.includes("logo"))}/>
               <Label className="form-check-label" check htmlFor="logo">Logo</Label>
           </FormGroup>

           <FormGroup check inline>
             <Input 
               className="form-check" 
               type="checkbox" 
               id="digital-signage" 
               name="digital-signage" 
               onChange={onChange} 
               value="digital-signage" 
               checked={customer && (customer.services.includes("digital-signage"))}/>
               <Label className="form-check-label" check htmlFor="digital-signage">Digital Signage</Label>
           </FormGroup>
                      
           <FormGroup check inline>
             <Input 
               className="form-check" 
               type="checkbox" 
               id="domain" 
               name="domain" 
               onChange={onChange} 
               value="domain" 
               checked={customer && (customer.services.includes("domain"))}/>
               <Label className="form-check-label" check htmlFor="domain">Domain</Label>
           </FormGroup>
          <FormText color="danger">{errors.services}</FormText>
        </Col>
      </FormGroup>    
    </React.Fragment>
  )
}
