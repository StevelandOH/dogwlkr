import './Activities.css';
import 'rsuite-table/dist/css/rsuite-table.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllActivities } from '../../store/activities';
import { HeaderCell, Table, Column, Cell } from 'rsuite-table';
import Modal from 'react-modal';

function ActivitiesDisplayPage({}) {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activity);
    const sessionUser = useSelector((state) => state.session.user);
    const act = Object.values(activities);
    const [sortColumn, setSortColumn] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('asc');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [item, setItem] = useState('');

    Modal.setAppElement(document.getElementById('root'));

    useEffect(() => {
        dispatch(setAllActivities(sessionUser.id));
    }, [sessionUser.id, dispatch]);

    useEffect(() => {
        setSortColumn('date');
        setData(act);
        setSortType('desc');
    }, [dispatch, activities, sessionUser]);

    const style = {
        overlay: {
            textAlign: 'center',
            top: '60px',
            backgroundColor: 'rgba(0,0, 0, 0.1)',
            zIndex: '1000',
        },
    };

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true);
        setData(act);
        console.log(data);
    };

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false);
    };

    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let n = a[sortColumn];
                let s = b[sortColumn];
                if (typeof n === 'string') {
                    n = n.charCodeAt(0);
                }
                if (typeof s === 'string') {
                    s = s.charCodeAt(0);
                }
                if (sortType === 'asc') {
                    return n - s;
                } else {
                    return s - n;
                }
            });
        }
        return data;
    };

    const fakeLoader = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setSortColumn(sortColumn);
            setSortType(sortType);
            setLoading(false);
        }, 500);
    };

    if (!act) return null;

    return (
        <div className="table-container">
            <Table
                data={getData()}
                height={1080}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={fakeLoader}
                loading={loading}
                onRowClick={(data) => setItem(data)}
            >
                {console.log(data)}
                <Column width={100} fixed="left">
                    <HeaderCell></HeaderCell>
                    <Cell>
                        {(rowData) => {
                            function handleEditAction() {
                                alert(
                                    `Will edit activity with the id of ${rowData.id}`
                                );
                            }
                            function handleTrashAction() {
                                alert(
                                    `Will delete activity with the id of ${rowData.id}`
                                );
                            }
                            return (
                                <span>
                                    <a onClick={handleEditAction}>
                                        {' '}
                                        <i className="far fa-edit"></i>
                                    </a>{' '}
                                    |
                                    <a onClick={handleTrashAction}>
                                        {' '}
                                        <i className="fas fa-trash-alt"></i>
                                    </a>{' '}
                                    |
                                </span>
                            );
                        }}
                    </Cell>
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Date</HeaderCell>
                    <Cell dataKey="date" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Time</HeaderCell>
                    <Cell dataKey="time" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Type</HeaderCell>
                    <Cell dataKey="type" />
                </Column>
                <Column width={110} align="center" resizable sortable>
                    <HeaderCell>Duration</HeaderCell>
                    <Cell dataKey="duration" />
                </Column>
                <Column width={110} align="center" resizable sortable>
                    <HeaderCell>Distance</HeaderCell>
                    <Cell dataKey="distance" />
                </Column>
                <Column align="center" flexGrow sortable>
                    <HeaderCell>Focus</HeaderCell>
                    <Cell dataKey="focus" />
                </Column>
                <Column width={100} fixed="left">
                    <HeaderCell>Notes</HeaderCell>
                    <Cell dataKey="notes">
                        {(rowData) => {
                            function handleAction() {
                                alert(`id:${rowData.id}`);
                            }
                            return (
                                <span>
                                    <a>
                                        <i
                                            className="fas fa-glasses"
                                            onClick={setModalIsOpenToTrue}
                                        ></i>
                                    </a>
                                    <Modal
                                        className="act-modal"
                                        style={style}
                                        isOpen={modalIsOpen}
                                    >
                                        <div>{item.notes}</div>
                                        <button onClick={setModalIsOpenToFalse}>
                                            x
                                        </button>
                                    </Modal>
                                </span>
                            );
                        }}
                    </Cell>
                </Column>
            </Table>
        </div>
    );
}

export default ActivitiesDisplayPage;
