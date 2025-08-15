import React, { useState } from 'react';
import './App.css';

function App() {
  const [processedData, setProcessedData] = useState([]);
  const [updatedWeightageData, setUpdatedWeightageData] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [phaseFilter, setPhaseFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');

  // Sample data for demonstration
  const sampleProjectData =[
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Overall",
        "stage_status": "Initiation",
        "sub_stage": null,
        "Design_Stage_weightage": null,
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "1",
        "Consultant": null,
        "baseline_plan_finish": "2023-01-15",
        "revised_baseline_finish": null,
        "forecast_finish": "2023-01-31",
        "rev_plan_percentage": "1",
        "actual_percentage": "1",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "1",
        "project_phase_category": "Overall",
        "variance_in_days": -16,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": null,
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1",
        "eot_to_contractor": null,
        "predecessor": [],
        "successor": [
            "Infrastructure$@Master Planning$@Villas$#Infrastructure$@Master Planning$@Villa$#LDC Procurement"
        ],
        "slippage_justification": null,
        "plan_start_date": "2023-01-10",
        "forecast_start_date": "2023-01-10",
        "plan_duration": 5,
        "forecast_duration": 21
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Infrastructure$@Master Planning$@Villa",
        "stage_status": "LDC Procurement",
        "sub_stage": null,
        "Design_Stage_weightage": null,
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.7",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2023-02-28",
        "revised_baseline_finish": null,
        "forecast_finish": "2023-02-28",
        "rev_plan_percentage": "1",
        "actual_percentage": "1",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "2",
        "project_phase_category": "Infrastructure$@Master Planning$@Villas",
        "variance_in_days": 0,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1",
        "eot_to_contractor": null,
        "predecessor": [
            "Overall$#Overall$#Initiation"
        ],
        "successor": [
            "Master Planning$#Master Planning$#Design$#Design Re-validation",
            "Villas$#Villa$#Design$#Concept design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2023-01-16",
        "forecast_start_date": "2023-02-01",
        "plan_duration": 43,
        "forecast_duration": 27
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Parks",
        "stage_status": "LDC Procurement",
        "sub_stage": null,
        "Design_Stage_weightage": null,
        "Executing Entity": null,
        "Phase_weightage": "0.1",
        "Consultant": "ICON",
        "baseline_plan_finish": "2024-01-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-05-07",
        "rev_plan_percentage": "1",
        "actual_percentage": "1.0000",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "3",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -463,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1.0000",
        "eot_to_contractor": null,
        "predecessor": [],
        "successor": [
            "Community Facilities$#Parks$#Design$#Concept Design"
        ],
        "slippage_justification": null,
        "plan_start_date": null,
        "forecast_start_date": null,
        "plan_duration": null,
        "forecast_duration": null
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Jame'e",
        "stage_status": "LDC Procurement",
        "sub_stage": null,
        "Design_Stage_weightage": null,
        "Executing Entity": null,
        "Phase_weightage": "0.1",
        "Consultant": "AL BAYATY ARCHITECTS and Engineering Consultancy LLC",
        "baseline_plan_finish": "2024-01-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-05-15",
        "rev_plan_percentage": "1",
        "actual_percentage": "1.0000",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "4",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -471,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1.0000",
        "eot_to_contractor": null,
        "predecessor": [],
        "successor": [
            "Community Facilities$#Jame'e$#Design$#Concept design"
        ],
        "slippage_justification": null,
        "plan_start_date": null,
        "forecast_start_date": null,
        "plan_duration": null,
        "forecast_duration": null
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Retails",
        "stage_status": "LDC Procurement",
        "sub_stage": null,
        "Design_Stage_weightage": null,
        "Executing Entity": null,
        "Phase_weightage": "0.1",
        "Consultant": null,
        "baseline_plan_finish": "2024-01-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-08-20",
        "rev_plan_percentage": "1",
        "actual_percentage": "0.9000",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "5",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -568,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0.9000",
        "eot_to_contractor": null,
        "predecessor": [],
        "successor": [
            "Community Facilities$#Retails$#Design$#Concept Design"
        ],
        "slippage_justification": "<p>LDC not yet awarded</p>",
        "plan_start_date": null,
        "forecast_start_date": null,
        "plan_duration": null,
        "forecast_duration": null
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Master Planning",
        "stage_status": "Design",
        "sub_stage": "Design Re-validation",
        "Design_Stage_weightage": "0.1",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.1",
        "Consultant": "Parsons",
        "baseline_plan_finish": null,
        "revised_baseline_finish": null,
        "forecast_finish": "2023-12-15",
        "rev_plan_percentage": "0",
        "actual_percentage": "1",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Alanoud Al Memari",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "6",
        "project_phase_category": "Master Planning",
        "variance_in_days": null,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1",
        "eot_to_contractor": null,
        "predecessor": [
            "Infrastructure$@Master Planning$@Villas$#Infrastructure$@Master Planning$@Villa$#LDC Procurement"
        ],
        "successor": [
            "Master Planning$#Master Planning$#Design$#Detailed Master Plan"
        ],
        "slippage_justification": null,
        "plan_start_date": "2023-03-01",
        "forecast_start_date": "2023-03-01",
        "plan_duration": null,
        "forecast_duration": 289
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Master Planning",
        "stage_status": "Design",
        "sub_stage": "Detailed Master Plan",
        "Design_Stage_weightage": "0.7",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.1",
        "Consultant": "Parsons",
        "baseline_plan_finish": null,
        "revised_baseline_finish": null,
        "forecast_finish": "2024-07-01",
        "rev_plan_percentage": "0",
        "actual_percentage": "1",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": "",
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Alanoud Al Memari",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "7",
        "project_phase_category": "Master Planning",
        "variance_in_days": null,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1",
        "eot_to_contractor": null,
        "predecessor": [
            "Master Planning$#Master Planning$#Design$#Design Re-validation"
        ],
        "successor": [
            "Master Planning$#Master Planning$#Design$#Planning approval: DMP"
        ],
        "slippage_justification": null,
        "plan_start_date": null,
        "forecast_start_date": "2023-12-16",
        "plan_duration": null,
        "forecast_duration": 198
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Master Planning",
        "stage_status": "Design",
        "sub_stage": "Planning approval: DMP",
        "Design_Stage_weightage": "0.2",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.1",
        "Consultant": "Parsons",
        "baseline_plan_finish": null,
        "revised_baseline_finish": null,
        "forecast_finish": "2025-02-14",
        "rev_plan_percentage": "0",
        "actual_percentage": "1.0000",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": "",
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Alanoud Al Memari",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "8",
        "project_phase_category": "Master Planning",
        "variance_in_days": null,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1.0000",
        "eot_to_contractor": null,
        "predecessor": [
            "Master Planning$#Master Planning$#Design$#Detailed Master Plan"
        ],
        "successor": [
            "Infrastructure$#Infrastructure$#Design$#Concept design",
            "Villas$#Villa$#Design$#Concept design"
        ],
        "slippage_justification": null,
        "plan_start_date": null,
        "forecast_start_date": "2024-07-02",
        "plan_duration": null,
        "forecast_duration": 227
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Infrastructure",
        "stage_status": "Design",
        "sub_stage": "Concept design",
        "Design_Stage_weightage": null,
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.3",
        "Consultant": "Parsons",
        "baseline_plan_finish": null,
        "revised_baseline_finish": null,
        "forecast_finish": "2025-01-25",
        "rev_plan_percentage": "1",
        "actual_percentage": "1.0000",
        "Contractor": "",
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": "",
        "lattitude": null,
        "longitude": "0",
        "PMC_Consultant": "",
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Haitham al Najem",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "9",
        "project_phase_category": "Infrastructure",
        "variance_in_days": null,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": "",
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": null,
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1.0000",
        "eot_to_contractor": null,
        "predecessor": [
            "Master Planning$#Master Planning$#Design$#Planning approval: DMP"
        ],
        "successor": [
            "Infrastructure$#Infrastructure$#Design$#Preliminary Design"
        ],
        "slippage_justification": null,
        "plan_start_date": null,
        "forecast_start_date": "2025-02-15",
        "plan_duration": null,
        "forecast_duration": -21
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Infrastructure",
        "stage_status": "Design",
        "sub_stage": "Preliminary Design",
        "Design_Stage_weightage": null,
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.3",
        "Consultant": "Parsons",
        "baseline_plan_finish": null,
        "revised_baseline_finish": null,
        "forecast_finish": "2025-04-28",
        "rev_plan_percentage": "1",
        "actual_percentage": "1.0000",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Haitham al Najem",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "10",
        "project_phase_category": "Infrastructure",
        "variance_in_days": null,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1.0000",
        "eot_to_contractor": null,
        "predecessor": [
            "Infrastructure$#Infrastructure$#Design$#Concept design"
        ],
        "successor": [
            "Infrastructure$#Infrastructure$#Design$#Detailed Design"
        ],
        "slippage_justification": null,
        "plan_start_date": null,
        "forecast_start_date": "2025-01-26",
        "plan_duration": null,
        "forecast_duration": 92
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Infrastructure",
        "stage_status": "Design",
        "sub_stage": "Detailed Design",
        "Design_Stage_weightage": "0.75",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.3",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2023-11-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-08-31",
        "rev_plan_percentage": "1",
        "actual_percentage": "0.8500",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Haitham al Najem",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "11",
        "project_phase_category": "Infrastructure",
        "variance_in_days": -640,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0.8500",
        "eot_to_contractor": null,
        "predecessor": [
            "Infrastructure$#Infrastructure$#Design$#Preliminary Design"
        ],
        "successor": [
            "Infrastructure$#Infrastructure$#Design$#Tender Documents",
            "Infrastructure$#Infrastructure$#Design$#Authority Approvals"
        ],
        "slippage_justification": "<p>(1) TAQA RW PDR is pending approval, which is hindering DDR submission, this is moving on (2) Processing in MePS for Buildings design approval is elongated posed by lingering obtainment of affection plans (site plans) for utility buildings from ADM, this is moving on.</p>",
        "plan_start_date": null,
        "forecast_start_date": "2025-04-29",
        "plan_duration": null,
        "forecast_duration": 124
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Infrastructure",
        "stage_status": "Design",
        "sub_stage": "Tender Documents",
        "Design_Stage_weightage": "0.06",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.3",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-01-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-07-30",
        "rev_plan_percentage": "1",
        "actual_percentage": "1.0000",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Haitham al Najem",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "12",
        "project_phase_category": "Infrastructure",
        "variance_in_days": -547,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1.0000",
        "eot_to_contractor": null,
        "predecessor": [
            "Infrastructure$#Infrastructure$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2023-12-01",
        "forecast_start_date": "2025-09-01",
        "plan_duration": 60,
        "forecast_duration": -33
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Infrastructure",
        "stage_status": "Design",
        "sub_stage": "Authority Approvals",
        "Design_Stage_weightage": "0.19",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.3",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-01-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-09-15",
        "rev_plan_percentage": "1",
        "actual_percentage": "0.5000",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Haitham al Najem",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "13",
        "project_phase_category": "Infrastructure",
        "variance_in_days": -594,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0.5000",
        "eot_to_contractor": null,
        "predecessor": [
            "Infrastructure$#Infrastructure$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2023-12-01",
        "forecast_start_date": "2025-09-01",
        "plan_duration": 60,
        "forecast_duration": 14
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Villa",
        "stage_status": "Design",
        "sub_stage": "Concept design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.4",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2023-08-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2024-03-26",
        "rev_plan_percentage": "1",
        "actual_percentage": "1",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Ali Abusada;Rafik Maher ",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "14",
        "project_phase_category": "Villas",
        "variance_in_days": -209,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1",
        "eot_to_contractor": null,
        "predecessor": [
            "Infrastructure$@Master Planning$@Villas$#Infrastructure$@Master Planning$@Villa$#LDC Procurement",
            "Master Planning$#Master Planning$#Design$#Planning approval: DMP"
        ],
        "successor": [
            "Villas$#Villa$#Design$#Schematic Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2023-03-01",
        "forecast_start_date": "2025-02-15",
        "plan_duration": 182,
        "forecast_duration": -326
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Villa",
        "stage_status": "Design",
        "sub_stage": "Schematic Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.4",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2023-11-15",
        "revised_baseline_finish": null,
        "forecast_finish": "2024-06-25",
        "rev_plan_percentage": "1",
        "actual_percentage": "1",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Ali Abusada;Rafik Maher ",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "15",
        "project_phase_category": "Villas",
        "variance_in_days": -223,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "1",
        "eot_to_contractor": null,
        "predecessor": [
            "Villas$#Villa$#Design$#Concept design"
        ],
        "successor": [
            "Villas$#Villa$#Design$#Detailed Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2023-08-31",
        "forecast_start_date": "2024-03-27",
        "plan_duration": 76,
        "forecast_duration": 90
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Villa",
        "stage_status": "Design",
        "sub_stage": "Detailed Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.4",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-01-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-07-08",
        "rev_plan_percentage": "1",
        "actual_percentage": "0.9800",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Ali Abusada;Rafik Maher ",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "16",
        "project_phase_category": "Villas",
        "variance_in_days": -524,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0.9800",
        "eot_to_contractor": null,
        "predecessor": [
            "Villas$#Villa$#Design$#Schematic Design"
        ],
        "successor": [
            "Villas$#Villa$#Design$#Tender Documents",
            "Villas$#Villa$#Design$#Authority Approvals"
        ],
        "slippage_justification": null,
        "plan_start_date": "2023-11-16",
        "forecast_start_date": "2024-06-26",
        "plan_duration": 76,
        "forecast_duration": 377
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Villa",
        "stage_status": "Design",
        "sub_stage": "Tender Documents",
        "Design_Stage_weightage": "0.06",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.4",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-03-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-08-08",
        "rev_plan_percentage": "1",
        "actual_percentage": "0",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Ali Abusada;Rafik Maher ",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "17",
        "project_phase_category": "Villas",
        "variance_in_days": -495,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0",
        "eot_to_contractor": null,
        "predecessor": [
            "Villas$#Villa$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-02-01",
        "forecast_start_date": "2025-07-09",
        "plan_duration": 59,
        "forecast_duration": 30
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Villa",
        "stage_status": "Design",
        "sub_stage": "Authority Approvals",
        "Design_Stage_weightage": "0.19",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.4",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-03-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-08-08",
        "rev_plan_percentage": "1",
        "actual_percentage": "0",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Ali Abusada;Rafik Maher ",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "18",
        "project_phase_category": "Villas",
        "variance_in_days": -495,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0",
        "eot_to_contractor": null,
        "predecessor": [
            "Villas$#Villa$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-02-01",
        "forecast_start_date": "2025-07-09",
        "plan_duration": 59,
        "forecast_duration": 30
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Parks",
        "stage_status": "Design",
        "sub_stage": "Concept Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": null,
        "Phase_weightage": "0.07",
        "Consultant": "ICON",
        "baseline_plan_finish": "2024-04-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-08-31",
        "rev_plan_percentage": "1",
        "actual_percentage": "0.7500",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": " Ahmed Hamdy",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "19",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -488,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0.7500",
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Parks$#LDC Procurement"
        ],
        "successor": [
            "Community Facilities$#Parks$#Design$#Schematic Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-01-31",
        "forecast_start_date": "2025-05-08",
        "plan_duration": 90,
        "forecast_duration": 115
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Parks",
        "stage_status": "Design",
        "sub_stage": "Schematic Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": null,
        "Phase_weightage": "0.07",
        "Consultant": "ICON",
        "baseline_plan_finish": "2024-06-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-10-06",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": " Ahmed Hamdy",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "20",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -463,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Parks$#Design$#Concept Design"
        ],
        "successor": [
            "Community Facilities$#Parks$#Design$#Detailed Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-05-01",
        "forecast_start_date": "2025-09-01",
        "plan_duration": 60,
        "forecast_duration": 35
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Parks",
        "stage_status": "Design",
        "sub_stage": "Detailed Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": null,
        "Phase_weightage": "0.07",
        "Consultant": "ICON",
        "baseline_plan_finish": "2024-08-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-02-04",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": " Ahmed Hamdy",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "21",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -523,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Parks$#Design$#Schematic Design"
        ],
        "successor": [
            "Community Facilities$#Parks$#Design$#Tender Documents",
            "Community Facilities$#Parks$#Design$#Authority Approvals"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-07-01",
        "forecast_start_date": "2025-10-07",
        "plan_duration": 60,
        "forecast_duration": 120
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Parks",
        "stage_status": "Design",
        "sub_stage": "Tender Documents",
        "Design_Stage_weightage": "0.0600",
        "Executing Entity": null,
        "Phase_weightage": "0.07",
        "Consultant": "ICON",
        "baseline_plan_finish": "2024-10-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-04-07",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": " Ahmed Hamdy",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "22",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -523,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Parks$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-08-31",
        "forecast_start_date": "2026-02-05",
        "plan_duration": 61,
        "forecast_duration": 61
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Parks",
        "stage_status": "Design",
        "sub_stage": "Authority Approvals",
        "Design_Stage_weightage": "0.1900",
        "Executing Entity": null,
        "Phase_weightage": "0.07",
        "Consultant": "ICON",
        "baseline_plan_finish": "2024-10-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-05-06",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": " Ahmed Hamdy",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "23",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -552,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Parks$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-08-31",
        "forecast_start_date": "2026-02-05",
        "plan_duration": 61,
        "forecast_duration": 90
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Jame'e",
        "stage_status": "Design",
        "sub_stage": "Concept design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.07",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-04-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-10-13",
        "rev_plan_percentage": "1",
        "actual_percentage": "0.3500",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Omar Salih",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "24",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -531,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0.3500",
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Jame'e$#LDC Procurement"
        ],
        "successor": [
            "Community Facilities$#Jame'e$#Design$#Schematic Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-01-31",
        "forecast_start_date": "2025-05-16",
        "plan_duration": 90,
        "forecast_duration": 150
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Jame'e",
        "stage_status": "Design",
        "sub_stage": "Schematic Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.07",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-06-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-01-13",
        "rev_plan_percentage": "1",
        "actual_percentage": "0",
        "Contractor": "",
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": "",
        "lattitude": null,
        "longitude": "0",
        "PMC_Consultant": "",
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Omar Salih",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "25",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -562,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": "",
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0",
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Jame'e$#Design$#Concept design"
        ],
        "successor": [
            "Community Facilities$#Jame'e$#Design$#Detailed Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-05-01",
        "forecast_start_date": "2025-10-14",
        "plan_duration": 60,
        "forecast_duration": 91
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Jame'e",
        "stage_status": "Design",
        "sub_stage": "Detailed Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.07",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-08-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-04-13",
        "rev_plan_percentage": "1",
        "actual_percentage": "0",
        "Contractor": "",
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": "",
        "lattitude": null,
        "longitude": "0",
        "PMC_Consultant": "",
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Omar Salih",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "26",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -591,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": "",
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0",
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Jame'e$#Design$#Schematic Design"
        ],
        "successor": [
            "Community Facilities$#Jame'e$#Design$#Authority Approvals",
            "Community Facilities$#Jame'e$#Design$#Tender Documents"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-07-01",
        "forecast_start_date": "2026-01-14",
        "plan_duration": 60,
        "forecast_duration": 89
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Jame'e",
        "stage_status": "Design",
        "sub_stage": "Tender Documents",
        "Design_Stage_weightage": "0.06",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.07",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-10-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-06-27",
        "rev_plan_percentage": "1",
        "actual_percentage": "0",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Omar Salih",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "27",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -604,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0",
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Jame'e$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-08-31",
        "forecast_start_date": "2026-04-14",
        "plan_duration": 61,
        "forecast_duration": 74
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Jame'e",
        "stage_status": "Design",
        "sub_stage": "Authority Approvals",
        "Design_Stage_weightage": "0.19",
        "Executing Entity": "Aldar Projects",
        "Phase_weightage": "0.07",
        "Consultant": "Parsons",
        "baseline_plan_finish": "2024-10-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-06-27",
        "rev_plan_percentage": "1",
        "actual_percentage": "0",
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": "Omar Salih",
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "28",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -604,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": "0",
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Jame'e$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-08-31",
        "forecast_start_date": "2026-04-14",
        "plan_duration": 61,
        "forecast_duration": 74
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Retails",
        "stage_status": "Design",
        "sub_stage": "Concept Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": null,
        "Phase_weightage": "0.06",
        "Consultant": null,
        "baseline_plan_finish": "2024-04-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-09-02",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "29",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -490,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Retails$#LDC Procurement"
        ],
        "successor": [
            "Community Facilities$#Retails$#Design$#Schematic Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-01-31",
        "forecast_start_date": "2025-08-21",
        "plan_duration": 90,
        "forecast_duration": 12
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Retails",
        "stage_status": "Design",
        "sub_stage": "Schematic Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": null,
        "Phase_weightage": "0.06",
        "Consultant": null,
        "baseline_plan_finish": "2024-06-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2025-11-02",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "30",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -490,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Retails$#Design$#Concept Design"
        ],
        "successor": [
            "Community Facilities$#Retails$#Design$#Detailed Design"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-05-01",
        "forecast_start_date": "2025-09-03",
        "plan_duration": 60,
        "forecast_duration": 60
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Retails",
        "stage_status": "Design",
        "sub_stage": "Detailed Design",
        "Design_Stage_weightage": "0.25",
        "Executing Entity": null,
        "Phase_weightage": "0.06",
        "Consultant": null,
        "baseline_plan_finish": "2024-08-30",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-03-03",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "31",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -550,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Retails$#Design$#Schematic Design"
        ],
        "successor": [
            "Community Facilities$#Retails$#Design$#Tender Documents",
            "Community Facilities$#Retails$#Design$#Authority Approvals"
        ],
        "slippage_justification": null,
        "plan_start_date": "2024-07-01",
        "forecast_start_date": "2025-11-03",
        "plan_duration": 60,
        "forecast_duration": 120
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Retails",
        "stage_status": "Design",
        "sub_stage": "Tender Documents",
        "Design_Stage_weightage": "0.0600",
        "Executing Entity": null,
        "Phase_weightage": "0.06",
        "Consultant": null,
        "baseline_plan_finish": "2024-10-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-05-04",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "32",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -550,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Retails$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-08-31",
        "forecast_start_date": "2026-03-04",
        "plan_duration": 61,
        "forecast_duration": 61
    },
    {
        "period": "2025-08-11",
        "project_name": "Al Sadr Residential Project (Design)",
        "phase": "Retails",
        "stage_status": "Design",
        "sub_stage": "Authority Approvals",
        "Design_Stage_weightage": "0.1900",
        "Executing Entity": null,
        "Phase_weightage": "0.06",
        "Consultant": null,
        "baseline_plan_finish": "2024-10-31",
        "revised_baseline_finish": null,
        "forecast_finish": "2026-05-04",
        "rev_plan_percentage": "1",
        "actual_percentage": null,
        "Contractor": null,
        "procurement_manager": null,
        "revised_plan_perc": null,
        "actual_plan_perc": null,
        "contract_start_date": null,
        "contract_end_date": null,
        "decree_end_date": null,
        "plan_end_date": null,
        "revised_plan_end_date": null,
        "forecasted_end_date": null,
        "key_highlights": null,
        "lattitude": null,
        "longitude": null,
        "PMC_Consultant": null,
        "SPA_date": null,
        "last_updated": null,
        "design_manager": null,
        "portfolio_manager": null,
        "controls_manager": null,
        "executive_director": null,
        "project_status_sorting_order": "33",
        "project_phase_category": "Community Facilities",
        "variance_in_days": -550,
        "plan_contractor_progress_percentage": null,
        "supervision_consultant": null,
        "kickoff_meeting_date": null,
        "pte": null,
        "pte_attachment": "[]",
        "svp": null,
        "svp_avatar": null,
        "actual_l_week": null,
        "eot_to_contractor": null,
        "predecessor": [
            "Community Facilities$#Retails$#Design$#Detailed Design"
        ],
        "successor": [],
        "slippage_justification": null,
        "plan_start_date": "2024-08-31",
        "forecast_start_date": "2026-03-04",
        "plan_duration": 61,
        "forecast_duration": 61
    }
];

  const sampleWeightageData ={
    "period": "2025-08-11",
    "project_name": "Al Sadr Residential Project (Design)",
    "Initiation": "0.05",
    "LDC Appointment": "0.05",
    "Design": "0.9",
    "Contractor Appointment": "0.00",
    "Construction": "0.00",
    "Handover": "0.00",
    "Overall": "1"
}

  const loadSampleProjectData = () => {
    document.getElementById('projectDataInput').value = JSON.stringify(sampleProjectData, null, 2);
    setErrors(prev => ({ ...prev, projectData: '' }));
  };

  const loadSampleWeightageData = () => {
    document.getElementById('projectWeightageInput').value = JSON.stringify(sampleWeightageData, null, 2);
    setErrors(prev => ({ ...prev, weightageData: '' }));
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const validateJSON = (jsonString, fieldName) => {
    try {
      const parsed = JSON.parse(jsonString);
      return { valid: true, data: parsed };
    } catch (error) {
      return { 
        valid: false, 
        error: `Invalid JSON in ${fieldName}: ${error.message}` 
      };
    }
  };

  // Function to process the data (same as original)
  const countActualPerc = (projectStatus, projectWeightage) => {
    // Create updated weightage object with renamed keys
    const updatedData = {
      ...projectWeightage,
      Construction: projectWeightage !== null ? Number(projectWeightage['Construction']) : 0,
      Design: projectWeightage !== null ? Number(projectWeightage['Design']) : 0,
      Handover: projectWeightage !== null ? Number(projectWeightage['Handover']) : 0,
      'DLP and Project Closeout': projectWeightage !== null ? Number(projectWeightage['Handover']) : 0,
      Initiation: projectWeightage !== null ? Number(projectWeightage['Initiation']) : 0,
      Overall: projectWeightage !== null ? Number(projectWeightage['Overall']) : 0,
      'Contractor Procurement': projectWeightage !== null ? Number(projectWeightage['Contractor Appointment']) : 0,
      'LDC Procurement': projectWeightage !== null ? Number(projectWeightage['LDC Appointment']) : 0,
    };

    // Remove old keys
    delete updatedData['Contractor Appointment'];
    delete updatedData['LDC Appointment'];

    // First transformation - set to 0 if stage_status is 'Handover'
    const projectNewStatus = projectStatus.map((res) => {
      return {
        ...res,
        Phase_weightage: res.stage_status.trim() === 'Handover' ? 0 : res.Phase_weightage,
        actual_plan_perc: res.stage_status.trim() === 'Handover' ? 0 : res.actual_plan_perc,
        actual_percentage: res.stage_status.trim() === 'Handover' ? 0 : res.actual_percentage,
        Design_Stage_weightage: res.stage_status.trim() === 'Handover' ? 0 : res.Design_Stage_weightage,
        revised_plan_perc: res.stage_status.trim() === 'Handover' ? 0 : res.revised_plan_perc,
        rev_plan_percentage: res.stage_status.trim() === 'Handover' ? 0 : res.rev_plan_percentage,
      };
    });

    // Second transformation - calculate countActual and countPlan
    const projectStatusData = projectNewStatus.map((res) => {
      // For Design stage only, use Design_Stage_weightage (default to 0 if null/undefined/empty)
      // For other stages, use 1 as the multiplier (don't use Design_Stage_weightage)
      const designStageWeight = res.stage_status.trim() === 'Design' ? 
        (res.Design_Stage_weightage !== null && res.Design_Stage_weightage !== undefined && res.Design_Stage_weightage !== '' ? 
         Number(res.Design_Stage_weightage) : 0) : 1;
    
      return {
        ...res,
        countActual: res.stage_status.trim() === 'Construction' || 
                    res.stage_status.trim() === 'Contractor Procurement' || 
                    res.stage_status.trim() === 'DLP and Project Closeout' ?
          Number(res.Phase_weightage) * Number(res.actual_plan_perc) * Number(updatedData[res.stage_status.trim()]) * 100 :
          Number(res.Phase_weightage) * Number(res.actual_percentage) * designStageWeight * Number(updatedData[res.stage_status.trim()]) * 100,
        countPlan: res.stage_status.trim() === 'Construction' || 
                  res.stage_status.trim() === 'Contractor Procurement' || 
                  res.stage_status.trim() === 'DLP and Project Closeout' ?
          Number(res.Phase_weightage) * Number(res.revised_plan_perc) * Number(updatedData[res.stage_status.trim()]) * 100 :
          Number(res.Phase_weightage) * Number(res.rev_plan_percentage) * designStageWeight * Number(updatedData[res.stage_status.trim()]) * 100,
      };
    });

    return { projectStatusData, updatedData };
  };

  const analyzeProject = () => {
    // Get input values
    const projectDataInput = document.getElementById('projectDataInput').value.trim();
    const weightageDataInput = document.getElementById('projectWeightageInput').value.trim();

    // Reset errors
    setErrors({});

    if (!projectDataInput) {
      setErrors(prev => ({ ...prev, projectData: 'Project data is required' }));
      return;
    }

    if (!weightageDataInput) {
      setErrors(prev => ({ ...prev, weightageData: 'Project weightage data is required' }));
      return;
    }

    // Validate JSON
    const projectDataValidation = validateJSON(projectDataInput, 'Project Data');
    if (!projectDataValidation.valid) {
      setErrors(prev => ({ ...prev, projectData: projectDataValidation.error }));
      return;
    }

    const weightageDataValidation = validateJSON(weightageDataInput, 'Weightage Data');
    if (!weightageDataValidation.valid) {
      setErrors(prev => ({ ...prev, weightageData: weightageDataValidation.error }));
      return;
    }

    // Process data
    try {
      const result = countActualPerc(projectDataValidation.data, weightageDataValidation.data);
      setProcessedData(result.projectStatusData);
      setUpdatedWeightageData(result.updatedData);

      // Show results
      setShowResults(true);
      showSuccess('✅ Project analysis completed successfully!');
    } catch (error) {
      setErrors(prev => ({ ...prev, projectData: `Error processing data: ${error.message}` }));
    }
  };

  const updateSummaryCards = () => {
    const filtered = filterTable();
    const totalRecords = filtered.length;
    const sumCountActual = filtered.reduce((sum, row) => sum + (row.countActual || 0), 0);
    const sumCountPlan = filtered.reduce((sum, row) => sum + (row.countPlan || 0), 0);
    const progress = sumCountPlan > 0 ? (sumCountActual / sumCountPlan * 100) : 0;

    return { totalRecords, sumCountActual, sumCountPlan, progress };
  };

  const exportToCSV = () => {
    if (processedData.length === 0) {
      alert('No data to export. Please analyze a project first.');
      return;
    }

    const headers = ['#', 'Phase', 'Stage Status', 'Sub Stage', 'Phase Weight', 'Actual %', 
                   'Rev Plan %', 'Design Stage Weight', 'Stage Weight', 'Count Actual', 
                   'Count Plan', 'Variance (Days)'];
    
    let csv = headers.join(',') + '\n';
    
    processedData.forEach((row, index) => {
      const rowData = [
        index + 1,
        `"${row.phase || ''}"`,
        `"${row.stage_status || ''}"`,
        `"${row.sub_stage || '-'}"`,
        Number(row.Phase_weightage || 0).toFixed(4),
        Number(row.actual_percentage || 0).toFixed(4),
        Number(row.rev_plan_percentage || 0).toFixed(4),
        row.Design_Stage_weightage ? Number(row.Design_Stage_weightage).toFixed(4) : '1.0000',
        updatedWeightageData[row.stage_status.trim()] ? Number(updatedWeightageData[row.stage_status.trim()]).toFixed(4) : '0.0000',
        (row.countActual || 0).toFixed(4),
        (row.countPlan || 0).toFixed(4),
        row.variance_in_days || '-'
      ];
      csv += rowData.join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'project_analysis.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filterTable = () => {
    const filtered = processedData.filter(row => {
      const phaseMatch = !phaseFilter || row.phase === phaseFilter;
      const stageMatch = !stageFilter || row.stage_status === stageFilter;
      return phaseMatch && stageMatch;
    });
    return filtered;
  };

  const resetFilters = () => {
    setPhaseFilter('');
    setStageFilter('');
  };

  const summaryData = updateSummaryCards();

  return (
    <div className="container">
      <h1>🏗️ Interactive Project Status Analysis Dashboard</h1>
      
      <div className="instructions">
        <h4>📋 How to Use:</h4>
        <ul>
          <li>Input your project data in JSON format in the fields below</li>
          <li>You can use the "Load Sample Data" buttons to see the expected format</li>
          <li>Click "Analyze Project" to generate the analysis</li>
          <li>The dashboard will calculate progress metrics and display interactive charts</li>
          <li>Use filters to focus on specific phases or stages</li>
        </ul>
      </div>
      
      <div className="data-input-section">
        <h2>📊 Data Input</h2>
        
        <div className="input-group">
          <label htmlFor="projectDataInput">Project Data (JSON Array):</label>
          <button className="sample-data-btn" onClick={loadSampleProjectData}>Load Sample Project Data</button>
          <textarea 
            id="projectDataInput" 
            placeholder="Paste your project data JSON array here..."
          />
          {errors.projectData && <div className="error-message">{errors.projectData}</div>}
        </div>
        
        <div className="input-group">
          <label htmlFor="projectWeightageInput">Project Weightage (JSON Object):</label>
          <button className="sample-data-btn" onClick={loadSampleWeightageData}>Load Sample Weightage Data</button>
          <textarea 
            id="projectWeightageInput" 
            placeholder="Paste your project weightage JSON object here..."
          />
          {errors.weightageData && <div className="error-message">{errors.weightageData}</div>}
        </div>
        
        <button className="analyze-btn" onClick={analyzeProject}>🚀 Analyze Project</button>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
      
      {showResults && (
        <>
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Total Records</h3>
              <div className="value">{summaryData.totalRecords}</div>
            </div>
            <div className="summary-card">
              <h3>Actual Progress</h3>
              <div className="value">{summaryData.sumCountActual.toFixed(2)}</div>
            </div>
            <div className="summary-card">
              <h3>Planned Progress</h3>
              <div className="value">{summaryData.sumCountPlan.toFixed(2)}</div>
            </div>
            <div className="summary-card">
              <h3>Overall Progress</h3>
              <div className="value">{summaryData.progress.toFixed(1)}%</div>
            </div>
          </div>
          
          <div className="weightage-table visible">
            <h2>📊 Stage Weightage Configuration</h2>
            <table>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Original Key</th>
                  <th>Weight Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: 'Initiation', original: 'Initiation', value: updatedWeightageData.Initiation },
                  { stage: 'LDC Procurement', original: 'LDC Appointment', value: updatedWeightageData['LDC Procurement'] },
                  { stage: 'Design', original: 'Design', value: updatedWeightageData.Design },
                  { stage: 'Contractor Procurement', original: 'Contractor Appointment', value: updatedWeightageData['Contractor Procurement'] },
                  { stage: 'Construction', original: 'Construction', value: updatedWeightageData.Construction },
                  { stage: 'Handover', original: 'Handover', value: updatedWeightageData.Handover },
                  { stage: 'DLP and Project Closeout', original: 'Handover', value: updatedWeightageData['DLP and Project Closeout'] },
                  { stage: 'Overall', original: 'Overall', value: updatedWeightageData.Overall }
                ].map((item, index) => (
                  <tr key={index}>
                    <td>{item.stage}</td>
                    <td>{item.original}</td>
                    <td className="number">{item.value.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="formula-box">
            <h3>📐 Calculation Formulas</h3>
            <div className="formula">
              <strong>For Construction / Contractor Procurement / DLP and Project Closeout:</strong><br/>
              countActual = Phase_weightage × actual_plan_perc × Stage_Weight × 100<br/>
              countPlan = Phase_weightage × revised_plan_perc × Stage_Weight × 100
            </div>
            <div className="formula">
              <strong>For Other Stages (Design, LDC Procurement, Initiation):</strong><br/>
              countActual = Phase_weightage × actual_percentage × Design_Stage_weightage × Stage_Weight × 100<br/>
              countPlan = Phase_weightage × rev_plan_percentage × Design_Stage_weightage × Stage_Weight × 100
            </div>
          </div>
          
          <div className="control-panel visible">
            <label>Filter by Phase:</label>
            <select 
              value={phaseFilter} 
              onChange={(e) => setPhaseFilter(e.target.value)}
            >
              <option value="">All Phases</option>
              {[...new Set(processedData.map(row => row.phase))].filter(Boolean).sort().map(phase => (
                <option key={phase} value={phase}>{phase}</option>
              ))}
            </select>
            
            <label>Filter by Stage:</label>
            <select 
              value={stageFilter} 
              onChange={(e) => setStageFilter(e.target.value)}
            >
              <option value="">All Stages</option>
              {[...new Set(processedData.map(row => row.stage_status))].filter(Boolean).sort().map(stage => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
            
            <button onClick={exportToCSV}>📥 Export to CSV</button>
            <button onClick={resetFilters}>🔄 Reset Filters</button>
          </div>
          
          <div className="table-wrapper visible">
            <h2>📋 Detailed Calculation Results</h2>
            <table id="resultsTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Phase</th>
                  <th>Stage Status</th>
                  <th>Sub Stage</th>
                  <th>Phase Weight</th>
                  <th>Actual %</th>
                  <th>Rev Plan %</th>
                  <th>Design Stage Weight</th>
                  <th>Stage Weight</th>
                  <th>Count Actual</th>
                  <th>Count Plan</th>
                </tr>
              </thead>
              <tbody>
                {filterTable().map((row, index) => {
                  const countActual = row.countActual || 0;
                  const countPlan = row.countPlan || 0;

                  let rowClass = '';
                  if (row.stage_status === 'Construction') rowClass = 'stage-construction';
                  else if (row.stage_status === 'Design') rowClass = 'stage-design';
                  else if (row.stage_status === 'LDC Procurement') rowClass = 'stage-ldc';
                  else if (row.stage_status === 'Initiation') rowClass = 'stage-initiation';

                  return (
                    <tr key={index} className={rowClass}>
                      <td>{index + 1}</td>
                      <td>{row.phase || ''}</td>
                      <td>{row.stage_status || ''}</td>
                      <td>{row.sub_stage || '-'}</td>
                      <td className={`number ${row.Phase_weightage == 0 ? 'zero' : ''}`}>
                        {Number(row.Phase_weightage || 0).toFixed(4)}
                      </td>
                      <td className={`number ${row.actual_percentage == 0 ? 'zero' : ''}`}>
                        {Number(row.actual_percentage || 0).toFixed(4)}
                      </td>
                      <td className={`number ${row.rev_plan_percentage == 0 ? 'zero' : ''}`}>
                        {Number(row.rev_plan_percentage || 0).toFixed(4)}
                      </td>
                      <td className={`number ${!row.Design_Stage_weightage ? 'zero' : ''}`}>
                      {row.Design_Stage_weightage && row.Design_Stage_weightage !== '' ? Number(row.Design_Stage_weightage).toFixed(4) : '0.0000'}
                    </td>
                      <td className="number">
                        {updatedWeightageData[row.stage_status.trim()] ? Number(updatedWeightageData[row.stage_status.trim()]).toFixed(4) : '0.0000'}
                      </td>
                      <td className="number highlight">{countActual.toFixed(4)}</td>
                      <td className="number highlight">{countPlan.toFixed(4)}</td>
                    </tr>
                  );
                })}
                {/* Totals Row */}
                {filterTable().length > 0 && (
                  <tr className="totals-row">
                    <td></td>
                    <td colSpan="8" className="totals-label">
                      <strong>📊 TOTALS:</strong>
                    </td>
                    <td className="number totals-actual">
                      <strong>{filterTable().reduce((sum, row) => sum + (row.countActual || 0), 0).toFixed(4)}</strong>
                    </td>
                    <td className="number totals-plan">
                      <strong>{filterTable().reduce((sum, row) => sum + (row.countPlan || 0), 0).toFixed(4)}</strong>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
      
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Project Status Analysis Dashboard. Developed by <strong>Vatsal B</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default App;