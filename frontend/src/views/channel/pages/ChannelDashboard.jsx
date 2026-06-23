import { useRef, useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Stack,
    Typography,
} from "@mui/material";

import AppTextField from "../../../components/common/AppTextField";
import { useForm } from "react-hook-form";

function ChannelDashboard() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const videoInputRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);

    const handleVideoSelect = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setVideoFile(file);
        setOpen(true);
    };

    const onSubmit = async (data) => {
        if (!videoFile) {
            alert("Please select a video");
            return;
        }

        const formData = new FormData();

        formData.append("videoFile", videoFile);
        formData.append("thumbnail", thumbnail);
        formData.append("title", data.title);
        formData.append("description", data.description || "");
        formData.append("isPublished", true);

        console.log([...formData.entries()]);

        // await uploadVideo(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h4" mb={3}>
                    Channel Dashboard
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => videoInputRef.current?.click()}
                >
                    Upload Video
                </Button>

                <input
                    ref={videoInputRef}
                    hidden
                    type="file"
                    accept="video/*"
                    onChange={handleVideoSelect}
                />

                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    maxWidth="sm"
                    fullWidth
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogTitle>Upload Video</DialogTitle>

                        <DialogContent>
                            <Stack spacing={3} mt={1}>
                                <Typography>
                                    Video: {videoFile?.name}
                                </Typography>

                                <AppTextField
                                    label="Title"
                                    {...register("title", {
                                        required: "Title is required",
                                    })}
                                    error={!!errors.title}
                                    helperText={errors.title?.message}
                                />

                                <AppTextField
                                    label="Description"
                                    multiline
                                    rows={4}
                                    {...register("description")}
                                />

                                <Button variant="outlined" component="label">
                                    Upload Thumbnail
                                    <input
                                        hidden
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setThumbnail(e.target.files?.[0])
                                        }
                                    />
                                </Button>

                                {thumbnail && (
                                    <img
                                        src={URL.createObjectURL(thumbnail)}
                                        alt="thumbnail"
                                        style={{
                                            width: "100%",
                                            borderRadius: 8,
                                        }}
                                    />
                                )}
                            </Stack>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={() => setOpen(false)}>
                                Cancel
                            </Button>

                            <Button variant="contained" type="submit">
                                Publish
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </form>
        </>
    );
}

export default ChannelDashboard;
