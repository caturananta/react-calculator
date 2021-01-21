import Table from "react-bootstrap/Table";
import "../styles/History.css";

function History(props) {
    return (
        <Table striped bordered hover>
            <thead className='history'>
            <tr>
                <th>Angka Pertama</th>
                <th>Operator</th>
                <th>Angka Kedua</th>
                <th>Hasil</th>
            </tr>
            </thead>
            <tbody>
            {
                props.obj.map((item, i) => (
                    <tr key={i++}>
                        <td>{item.angkaPertama}</td>
                        <td>{item.operator}</td>
                        <td>{item.angkaKedua}</td>
                        <td>{item.hasil}</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
    // return props.obj.map(item => (
    //     <h1 key={item.name + item + 1}>{item.name}</h1>
    // ));
}

export default History