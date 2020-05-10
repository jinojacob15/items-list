import React, { useEffect }  from 'react';
import { Card,CardBody, Button,Input,Form,Label,Row,Col,FormGroup} from 'reactstrap';
import { useForm ,Controller} from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InvalidFeedback from 'components/InvalidFeedback'
import moment from 'moment';
const CreateFormComponent = (props) => {
    

    const { register, handleSubmit, errors,control ,reset } = useForm({
      });
      
    const onSubmit = (data) => {
        data['id'] = props.defaultValues.id || ''
        props.onSubmit(data)
    
    }
    useEffect(() => {
        let result = {...props.defaultValues}
        result['date'] =  moment(result['date']).toDate();
        reset(result);
      },[reset,props.defaultValues])
  
  return (
     
          <Card>
              <CardBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                    <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >Title</Label>
                    <Input type="text" name="title" autoFocus  innerRef={register({required: true})} placeholder="title"/>
                    {errors.title && errors.title.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                    <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >Date</Label>
                    <Controller
                        as={<ReactDatePicker minDate={new Date()} dateFormat="dd/MM/yyyy"/>}
                        control={control}
                        valueName="selected" 
                        onChange={([selected]) => selected}
                        name="date"
                        className="form-control"
                        placeholderText="Select date"
                        rules={{ required: true }}
                       />
                        {errors.date && errors.date.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                    <Col md={6} xs={12}>
                    <FormGroup>
                  <Label>Status</Label>
                        <Input type="select" name="status"  innerRef={register({required: true})}>
                        <option value="active">active</option>
                            <option value="inactive">inactive</option>
                        </Input>

                    </FormGroup>
                    </Col>
                    <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >Description</Label>
                    <Input type="textarea" name="description"  innerRef={register({required: true})} placeholder="description"/>
                    {errors.description && errors.description.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                    </Row>
                    
                     <center><Button disabled={props.disabled}color="primary" className="submit-btn" type="submit">{Object.keys(props.defaultValues).length!==0?"Save":"Create"}</Button></center>
                </Form>
               </CardBody>
           </Card>

    
  );
}

export default CreateFormComponent;
