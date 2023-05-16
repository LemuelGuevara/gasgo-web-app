import GoogleIcon from "@mui/icons-material/Google";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {
  Divider,
  FormControl,
  FormLabel,
  Modal,
  ModalClose,
  ModalDialog,
  Stack,
  Typography
} from "@mui/joy";
import React from "react";
import { RoundedButton } from "../styled/Button/Rounded";
import { RoundedInput } from "../styled/input/RoundedInput";

interface AuthButtonProps {
  text: string;
  textColor?: string;
  icon?: any;
  type?: any;
  bgColor?: string;
  hoverBgColor?: string;
}

const AuthModalButton: React.FC<AuthButtonProps> = (props) => {
  return (
    <RoundedButton
      type={props.type}
      startDecorator={props.icon}
      sx={{
        backgroundColor: props.bgColor,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 12,
        color: props.textColor,
        cursor: "pointer",
        boxShadow: "sm",
        paddingLeft: 1.5,
        paddingRight: 0.5,
        "&:hover": {
          backgroundColor: props.hoverBgColor,
          transition: `200ms ease-in-out`,
        },
      }}
    >
      {props.text}
    </RoundedButton>
  );
};

export const AuthModal = (props: { openModal: any; setOpenModal: any }) => {
  const { openModal, setOpenModal } = props;

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        sx={{ maxWidth: 500 }}
      >
        <Typography id="basic-modal-dialog-title" component="h2">
          Log in or Sign Up
        </Typography>
        <Typography
          id="basic-modal-dialog-description"
          textColor="text.tertiary"
        >
          Welcome to GasGo
        </Typography>
        <ModalClose
          variant="outlined"
          sx={{
            top: "calc(-1/4 * var(--IconButton-size))",
            right: "calc(-1/4 * var(--IconButton-size))",
            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
            borderRadius: "50%",
            bgcolor: "background.body",
          }}
        />
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setOpenModal(false);
          }}
        >
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <RoundedInput
                autoFocus
                required
                startDecorator={
                  <MailOutlineRoundedIcon sx={{ fontSize: 20 }} />
                }
                placeholder="johndoe@email.com"
                sx={{ borderRadius: 12 }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <RoundedInput
                required
                placeholder="***************"
                startDecorator={<LockOpenRoundedIcon sx={{ fontSize: 20 }} />}
                sx={{ borderRadius: 12 }}
              />
            </FormControl>
            <AuthModalButton
              text="Continue"
              textColor="white"
              type="submit"
              bgColor="primary.300"
              hoverBgColor="primary.400"
            />
          </Stack>
        </form>
        <Divider sx={{ pl: 2.5, pr: 2.5, pt: 2 }}>
          <Typography level="labelMedium" textColor="text.tertiary">
            or
          </Typography>
        </Divider>
        <Stack pt={2} spacing={1.5}>
          <AuthModalButton
            text="Continue with Google"
            textColor="black"
            hoverBgColor="primary.50"
            icon={<GoogleIcon sx={{ fontSize: 18, color: "primary.300" }} />}
          />
        </Stack>
      </ModalDialog>
    </Modal>
  );
};
