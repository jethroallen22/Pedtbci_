import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Tabs,
  Tab,
  Typography,
  useTheme,
  Paper,
  Button,
  Modal,
  Divider,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db, doc, deleteDoc } from "../../firebase.config";
import { tokens } from "../../theme";

function DiagnosisDetail({caseNumber, diagnosisData}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [diagnosis, setDiagnosis] = useState([]);


  useEffect(() => {
    // Check if diagnosisData is not undefined or null before setting the state
    if (diagnosisData) {
      // Assuming timestamp is an object
      setDiagnosis(diagnosisData);
    }
  }, [diagnosisData]);
  

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        backgroundColor: colors.blueAccent[800],
        padding: theme.spacing(5),
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        color={colors.grey[100]}
        style={{ marginBottom: 5 }}
      >
        Diagnosis Information
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: 80,
          }}
        >
          <div>
            <Box
              p="10px"
              mb="5px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              backgroundColor={colors.primary[600]}
              borderRadius="4px"
            >
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.grey[100]}
                marginRight={1}
              >
                Reference Number:
              </Typography>
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.greenAccent[500]}
              >
                {diagnosis.referenceNumber}
              </Typography>
            </Box>
            <Box
              p="10px"
              mb="5px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              backgroundColor={colors.primary[600]}
              borderRadius="4px"
            >
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.grey[100]}
              >
                Diagnosis:
              </Typography>
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.greenAccent[500]}
                ml="5px"
              >
                {diagnosis.testResult}
              </Typography>
            </Box>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Box
              p="10px"
              mb="5px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              backgroundColor={colors.primary[600]}
              borderRadius="4px"
            >
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.grey[100]}
                marginRight={1}
              >
                Date Diagnosed:
              </Typography>
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.greenAccent[500]}
              >
                {diagnosis.testDate}
              </Typography>
            </Box>
            <Box
              p="10px"
              mb="5px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              backgroundColor={colors.primary[600]}
              borderRadius="4px"
            >
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.grey[100]}
                marginRight={1}
              >
                Status:
              </Typography>
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.greenAccent[500]}
              >
                {diagnosis.status}
              </Typography>
            </Box>
          </div>
        </div>
      </div>
      <Box
              p="10px"
              mb="5px"
              alignItems="center"
              backgroundColor={colors.primary[600]}
              borderRadius="4px"
            >
              <Typography
                variant="h6"
                fontWeight="regular"
                color={colors.grey[100]}
                marginRight={1}
              >
                Remarks:
              </Typography>
              <Typography
                variant="subtitle"
                fontWeight="regular"
                color={colors.greenAccent[500]}
              >
                {diagnosis.remarks}
              </Typography>
            </Box>
    </Container>
  );
}

export default DiagnosisDetail;