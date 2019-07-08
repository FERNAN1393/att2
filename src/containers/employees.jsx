
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, updateUser, deleteUser } from '../redux/actions/action.users';

const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers, updateUser, deleteUser }, dispatch);
 const mapStateToProps = ({users, user}) => {
    return {  users, user }
}

const style ={ marginLeft : '3px', marginTop: 'auto'};
const columns = [{
  dataField: 'sapId',
  text: 'SAP ID',
  sort: true,
  filter: textFilter()
},
{
  dataField: 'email',
  text: 'Email',
  sort: true,
  filter: textFilter(),
  editable: false
}, 
{
  dataField: 'employeeName',
  text: 'Name',
  sort: true,
  filter: textFilter(),
  editable: false
},
{
  dataField: 'batchNumber',
  text: 'BatchNumber',
  sort: true,
  filter: textFilter(),
  editable: false
},
{
  dataField: 'roleName',
  text: 'Role',
  sort: true,
  filter: textFilter()
},
{
  dataField: 'actions',
  text: 'Actions',
},
]
class _Employees extends React.PureComponent {

    state = {
      users:[],
      usersData:[],
      sapId: '',
      rowIndex: '',
      modalIsOpen: false,
      modalDelete: false,
      dropdownOpen: false,
      rol: '',
      error: ''
    };

  
   componentDidMount(){ this.props.getUsers() }
   openModal=() => this.setState({ modalIsOpen: true });
   openModalDelete = () => this.setState({ modalDelete: true });
   closeModal=()=> this.setState({ modalIsOpen: false, modalDelete: false });
   onTodoChange=({target:{value: sapId }})=>this.setState({sapId});
   toggle = () => this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen }));
   handleChange = (selectedOption) => this.setState({ selectedOption });
   select = ({ target:{ innerText: rol }}) => this.setState({ dropdownOpen: !this.state.dropdownOpen, rol });

   onAdmin = async () =>  {
        let { role, sapId } = this.state;
        role === 'Administrador' ? role = '1': role = '2';
        const userToChange = { sapId, role };
        const {  errorMessage } = await updateUser(userToChange);
        this.setState({ modalIsOpen: false, errorDescription: errorMessage, error: !!errorMessage })
   }


      onDelete = async (row) =>  {
       const userToDelete = { sapId: this.state.sapId };
       const { errorMessage }= await this.props.deleteUser(userToDelete);
       if(errorMessage){
         this.setState({error:true, errorDescription:errorMessage});
       }
   }

    rowEvents = {
      onClick: (e, row, rowIndex) => {
      this.setState({
          sapId : row['sapId'],
          rol : row['roleName'],
          rowIndex: rowIndex
        })
      }
  };

  static getDerivedStateFromProps(props, state){
    return {
      ...state,
      users: props.users
     }
  }

  getUsersjsx =()=> {
    return this.state.users.map((user) => {
      const jsx =  <div>
                       <button className="btn btn-primary" onClick={this.openModal}>
                         <i className="fa fa-edit"></i>
                       </button>
                       <button  style = {style} className="btn btn-danger" onClick={this.openModalDelete}>
                         <i className="fa fa-trash"></i>
                       </button>
                    </div>;
            return {
              ...user,
              actions: jsx
            };
         });
  }

  
   render() {
    const { sapId: id, rowIndex: row, dropdownOpen, rol, modalDelete } = this.state; 
     return (
       <div>
         <div>
             <Modal
                isOpen={this.state.modalIsOpen}
                contentLabel="Example Modal"
                >
                 <ModalBody>
                   <h2>Edit Information!</h2>
                   <p>Sap Id</p>
                   <input type ="text" value= {id} onChange={this.onTodoChange}></input>
                   <p>Rol</p>
                    <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle caret>{rol}</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.select}>User</DropdownItem>
                          <DropdownItem onClick={this.select}>Administrador</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                 </ModalBody>
                 <ModalFooter>
                    <Button onClick={this.onAdmin} color="success">
                      Save
                    </Button>
                    <Button onClick={this.closeModal} color="danger">
                      Cancel
                    </Button>
                 </ModalFooter>
             </Modal>
             <Modal
                isOpen={modalDelete}
                contentLabel="Example Modal"
                >
                 <ModalBody>
                   <h4>Are you sure you want to delete this user?</h4>
                 </ModalBody>
                 <ModalFooter>
                    <Button onClick={this.onDelete.bind(row)} color="success">
                      Yes
                    </Button>
                    <Button onClick={this.closeModal} color="danger">
                      No
                    </Button>
                 </ModalFooter>
             </Modal>
         </div>
         <div style={{ marginTop: 50 }}>
           <BootstrapTable 
             striped
             hover
             keyField='batchNumber' 
             data={ this.getUsersjsx() }
             rowEvents={ this.rowEvents }
             columns={ columns } 
             pagination={ paginationFactory()}
             filter={ filterFactory() }
           />
         </div>
       </div>
    );
  }
 }

export const Employees = connect(mapStateToProps, mapDispatchToProps)(_Employees);