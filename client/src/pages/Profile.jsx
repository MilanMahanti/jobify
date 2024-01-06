import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get("avatar");
    if (file && file.size > 50000) {
      toast.error("File size is too large");
      return null;
    }
    try {
      await customFetch.patch("/auth/update-user", formData);
      queryClient.invalidateQueries(["user"]);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return null;
  };

function Profile() {
  const { user } = useOutletContext();
  const { name, lastName, location, email } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">Profile page</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file(max 0.5mb)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            label="first name"
            name="name"
            defaultValue={name}
          />
          <FormRow
            type="text"
            label="last name"
            name="lastName"
            defaultValue={lastName}
          />
          <FormRow type="text" name="location" defaultValue={location} />
          <FormRow type="email" name="email" defaultValue={email} />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update profile"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
}

export default Profile;
