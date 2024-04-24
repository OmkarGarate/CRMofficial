import React, { useEffect, useState } from "react";
import rightArrow from "../Images/rgtarrow.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSignupHead } from "../hooks/useSignupHead";
import { useSignupEmp } from "../hooks/useSignupEmp";

function CBrif() {
  const { user } = useAuthContext();

  const [firstName, setFirstName] = useState("");
  const [orgId, setOrgId] = useState("");
  const [errorM, setErrorM] = useState(null);
  const [conf, setConf] = useState("");
  console.log("ud", user);
  // if(user.org){
  //   setOrgId(user.org.orgId)
  // }else if(user.head)
  // {
  //   setOrgId(user.head.orgId)
  // }else if(user.employee){
  //   setOrgId(user.emp.orgId)
  // }

  console.log("ordId", orgId);

  useEffect(() => {
    const fetchOrg = async () => {
      const response = await fetch(
        `http://localhost:4000/orgs/getOneOrg/${user.user.orgId}`
      );

      const json = await response.json();
      setFirstName(json.companyName);
      setOrgId(json.orgId);

      console.log("fetched org", json);
    };

    if (user) {
      fetchOrg();
    }
  }, [user]);

  const [pi, setPi] = useState({
    transform: "translateX(-200px)",
    opacity: "0",
    animation: "none",
    backgroundColor: '#fdd5d5'
  });
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [department2, setDepartment2] = useState("");
  const [role2, setRole2] = useState("");
  const [userType, setUserType] = useState("");
  const [empas, setEmpas] = useState({
    display: "none",
  });
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const generateEmployeeId = (firstName) => {
    const maxLength = 7; // Maximum length of the ID
    let employeeId = ""; // Initialize employee ID

    // Remove spaces and convert names to uppercase
    const processedFirstName = firstName.replace(/\s+/g, "").toUpperCase();

    // Concatenate the first 3 characters of the first name and the first 4 characters of the company name
    employeeId = processedFirstName.slice(0, 3);

    // Add random numbers to fill the remaining space in the ID
    const numNumbers = maxLength - employeeId.length;
    for (let i = 0; i < numNumbers; i++) {
      employeeId += Math.floor(Math.random() * 10); // Add random number between 0 and 9
    }

    // employeeId = shuffle(employeeId.split('')).join('');

    return employeeId;
  };

  // Function to shuffle an array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generatePassword = (firstName) => {
    // Characters that can be used in the password
    const chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

    // Special characters
    const specialChars = "!@#$%^&*()_+";

    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers = "0123456789";

    // Initialize an empty password string
    let password = "";

    // Add the first name to the password
    password += firstName.replace(/\s+/g, "");

    // Add at least one special character to the password
    const randomSpecialChar =
      specialChars[Math.floor(Math.random() * specialChars.length)];
    password += randomSpecialChar;

    // Add at least two numbers to the password
    let numCount = 0;
    while (numCount < 2) {
      const randomIndex = Math.floor(Math.random() * 10); // Generate a random index for numbers
      password += numbers[randomIndex];
      numCount++;
    }

    let capCount = 0;
    while (capCount < 2) {
      const randomIndex = Math.floor(Math.random() * 10); // Generate a random index for numbers
      password += caps[randomIndex];
      capCount++;
    }

    // Add random characters to the password to make it strong
    while (password.length < 10) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    password = shuffle(password.split("")).join("");

    return password;
  };

  useEffect(() => {
    setTimeout(() => {
      setPi({
          animation: "fadeIn 0.3s ease-in-out",
        backgroundColor: '#fdd5d5'
      });
    }, 200);

    if (
      user.user.role === "Human Resource Head2" ||
      user.user.userType === "Org"
    ) {
      if (department && role) {
        setEmpas({
          display: "flex",
        });
        setUserType("Head");
      } else if (department2 && role2) {
        setEmpas({
          display: "flex",
        });
        setUserType("Employee");
      }
      setEmpId(generateEmployeeId(firstName));
      setPassword(generatePassword(firstName));
    }
  }, [department, role, department2, role2]);
  console.log("empId", empId);

  const { signupHead, error, isLoading } = useSignupHead();
  const { signupEmp, error2, isLoading2 } = useSignupEmp();

  //   console.log(department, role, empId, password, userType)
  //   console.log(department2, role2, userType)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.user.userType === "Org") {
      await signupHead(orgId, department, role, empId, password, userType);
      fetchHeads()
    }

    if (!error) {
      setConf("Successfully Registered!!");
    } else {
      setErrorM(error || error2);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    if (
      user.user.userType === "Head" &&
      user.user.role === "Human Resource Head2"
    ) {
      await signupEmp(orgId, department2, role2, empId, password, userType);
      fetchEmps()
    }

    if (!error) {
      setConf("Successfully Registered!!");
    } else {
      setErrorM(error || error2);
    }
  };

  const [heads, setHeads] = useState("");
  const [ehText, setEhText] = useState("");

  const fetchHeads = async () => {
    try {
      const response = await fetch("http://localhost:4000/heads/getAllHeads");
      if (response.ok) {
        const json = await response.json();
        // Sort the heads in descending order based on the _id field
        const sortedHeads = json.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setHeads(sortedHeads);
      }
    } catch (error) {
      console.error("Error fetching heads:", error);
    }
  };

  const fetchEmps = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/employees/getAllEmployees"
      );
      if (response.ok) {
        const json = await response.json();
        // Sort the heads in descending order based on the _id field
        const sortedHeads = json.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setHeads(sortedHeads);
      }
    } catch (error) {
      console.error("Error fetching heads:", error);
    }
  };

  useEffect(() => {
    

    if (user.user.userType === "Org") {
      fetchHeads();
      setEhText("Heads");
    }

    if (user.user.role === "Human Resource Head2") {
      fetchEmps();
      setEhText("Employees");
    }
  }, [user]);

  return (
    <div className="cbpInfo">
      
      
      <div className="cbTop">
        <Link to={'/profile/'}><p style={pi}>Company Brif</p></Link>
      </div>

      <div className="ahdMain">
        <p className="ehText">{ehText}</p>
        <div className="allHeads">
          <div className="ahHead">
            <p>Department</p>
            <p>Role</p>
            <p>Employee ID</p>
            <p>Password</p>
          </div>
          {heads &&
            heads.map((head, index) => (
              <div key={index} className="ahDetails">
                <p>{head.department}</p>
                <p>{head.role}</p>
                <p>{head.empId}</p>
                <p>{head.password}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="drpMain">
        <div className="CbLogo"></div>
        <form
          action=""
          className="drpForm"
          onSubmit={user.user.userType === "Org" ? handleSubmit : handleSubmit2}
        >
          {user && user.user.userType === "Org" ? (
            <>
              <div className="labDrop">
                <label>Department</label>
                <select
                  name="department"
                  id="department"
                  onBlur={(e) => setDepartment(e.target.value)}
                >
                  <option value="Human Resource">Human Resource</option>
                  <option value="Human Resource2">Human Resource2</option>
                  <option value="Human Resource3">Human Resource3</option>
                  <option value="Human Resource4">Human Resource4</option>
                </select>
              </div>
              <div className="labDrop">
                <label>Role</label>
                <select
                  name="role"
                  id="role"
                  onBlur={(e) => setRole(e.target.value)}
                >
                  <option value="Human Resource Head">
                    Human Resource Head
                  </option>
                  <option value="Human Resource Head2">
                    Human Resource Head2
                  </option>
                  <option value="Human Resource Head3">
                    Human Resource Head3
                  </option>
                  <option value="Human Resource Head4">
                    Human Resource Head4
                  </option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="labDrop">
                <label>Department</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => setDepartment2(e.target.value)}
                >
                  <option value="">Employee Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
              </div>
              <div className="labDrop">
                <label>Role</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => setRole2(e.target.value)}
                >
                  <option value="">Employee Role</option>
                  <option value="Role 1">Role 1</option>
                  <option value="Role 2">Role 2</option>
                  <option value="Role 3">Role 3</option>
                </select>
              </div>
            </>
          )}

          <div className="labDrop" style={empas}>
            <label>Employee Id</label>
            <input type="text" readOnly value={empId} />
          </div>
          <div className="labDrop" style={empas}>
            <label>Password</label>
            <input type="text" readOnly value={password} />
          </div>
          <div className="prevNext">
            <button className="next">Create</button>
          </div>
          {!errorM && errorM != "" ? (
            <div className="success">{conf}</div>
          ) : (
            <div className="errorM">{errorM}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CBrif;
