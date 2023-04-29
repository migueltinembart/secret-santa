import { useStore } from "../store/RegistrationStore";
import { fetchFromFormPost } from "../lib/fetchHandlers/fetchFromFormAction";

interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Home() {
  const store = useStore();
  return (
    <div className="flex flex-col w-full h-full lg:flex-row">
      <div className="grid flex-grow h-32 lg:h-full card bg-base-200 rounded-box place-items-center">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Invite-Code</span>
          </label>
          <label className="input-group">
            <input type="text" maxLength={8} className="input input-bordered" />
            <span className="btn btn-primary">Go</span>
          </label>
        </div>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow h-32 lg:h-full card bg-base-200 rounded-box place-items-center">
        <div className="form-control">
          <form
            action="/api/registration-confirm"
            method="post"
            className="flex flex-col place-items-center"
            onSubmit={async (e) => {
              const response = await fetchFromFormPost<RegistrationForm>(e, {
                firstName: store.firstName,
                lastName: store.lastName,
                email: store.email,
              });
              
            }}
          >
            <div>
              <label htmlFor="" className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                className="input"
                onChange={(e) => store.setFirstName(e.target.value)}
              ></input>
              <label htmlFor="" className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                className="input"
                onChange={(e) => store.setLastName!(e.target.value)}
              ></input>
              <label htmlFor="" className="label">
                <span className="label-text">Email adress</span>
              </label>
              <input
                type="text"
                className="input"
                onChange={(e) => store.setEmail!(e.target.value)}
              ></input>
            </div>
            <label className="label">
              <input
                type="submit"
                value={"Submit registration"}
                className={`btn btn-ghost btn-primary`}
              ></input>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
