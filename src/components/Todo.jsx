import {useAuth} from "./security/AuthContext";
export default function Todo()
{
    const today = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);
    const targetdate = nextYear.toISOString().split('T')[0];
    const { isAuthenticated } = useAuth();
    const todos = [
        { id: 1, title: 'Learn React', completed: false, targetdate },
        { id: 2, title: 'Learn Spring', completed: false, targetdate },
        { id: 3, title: 'Learn Docker', completed: false, targetdate },
    ];
    if(isAuthenticated)
    return (
        <div className="container mt-5">

            <h1 className="mb-4">Welcome to the Todo App</h1>

            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? 'Yes' : 'No'}</td>
                                <td>{todo.targetdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
    else
    {
        return (
            <div className="container mt-5">
                <h1 className="mb-4">Please login to view your todos.</h1>
            </div>
        )
    }

}