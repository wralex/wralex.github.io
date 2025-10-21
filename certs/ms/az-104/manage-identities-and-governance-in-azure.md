---
layout: default
title: 'AZ-104: Manage identities and governance in Azure'
link: 'https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/'
preIds: az401-manage-identities-governance
---
[_Back_](.)

Learn how to manage Azure Active Directory objects, role-based access control (RBAC), subscriptions, and governance in Azure. Here are the learning paths in the AZ-104 Azure 

<!-- {% assign counter = 1 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
- {% include checkLine.html title='Understand Microsoft Entra ID' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory' %}{: .fs-3 }

    This module explains Microsoft Entra ID. You'll compare Microsoft Entra ID to Active Directory DS, learn about Microsoft Entra ID P1 and P2, and explore Microsoft Entra Domain Services for managing domain-joined devices and apps in the cloud.

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Introduction' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/1-introduction' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Examine Microsoft Entra ID' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/2-examine-azure-active-directory' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Compare Microsoft Entra ID and Active Directory Domain Services' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/3-compare-azure-active-directory-domain-services' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Examine Microsoft Entra ID as a directory service for cloud apps' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/4-examine-azure-directory-service-cloud-apps' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Compare Microsoft Entra ID P1 and P2 plans' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/5-compare-azure-premium-p1-p2-plans' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Examine Microsoft Entra Domain Services' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/6-examine-azure-domain-services' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Module assessment' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/7-knowledge-check' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Summary' id=result
        link='https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/8-summary' %}

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
- {% include checkLine.html title='Create, configure, and manage identities' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/' %}{: .fs-3 }

    Access to cloud-based workloads needs to be controlled centrally by providing a definitive identity for each user and resource. You can ensure employees and vendors have just-enough access to do their job.

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Introduction' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/1-introduction' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Create, configure, and manage users' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/2-users' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - assign licenses to users' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/3-exercise-assign-licenses-users' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - restore or remove deleted users' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/4-exercise-restore-remove-deleted-users' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Create, configure, and manage groups' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/5-groups' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - add groups in Microsoft Entra ID' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/6-exercise-add-groups-azure-active-directory' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Configure and manage device registration' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/7-configure-manage-device-registration' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Manage licenses' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/8-manage-licenses' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - change group license assignments' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/9-exercise-change-group-license-assignments' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - change user license assignments' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/10-exercise-change-user-license-assignments' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Create custom security attributes' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/11-create-custom-security-attributes' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Explore automatic user creation' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/12-explore-automatic-user-creation' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Module assessment' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/13-knowledge-check' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Summary and resources' id=result
        link='https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/14-summary-resources' %}

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
- {% include checkLine.html title='Describe the core architectural components of Azure' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/' %}{: .fs-3 }

    This module explains the basic infrastructure components of Microsoft Azure. You'll learn about the physical infrastructure, how resources are managed, and have a chance to create an Azure resource.

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Introduction' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/1-introduction' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='What is Microsoft Azure' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/2-what-microsoft-azure' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Get started with Azure accounts' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/3-get-started-azure-accounts' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - Explore interacting with Azure' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/4-exercise-explore-learn-sandbox' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Describe Azure physical infrastructure' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Describe Azure management infrastructure' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - Create an Azure resource' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/7-exercise-create-azure-resource' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Module assessment' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/8-knowledge-check' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Summary' id=result
        link='https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/9-summary' %}

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
- {% include checkLine.html title='Azure Policy initiatives' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/' %}{: .fs-3 }

    In this module, you learn how Azure Policy initiatives can be used to enforce organizational standards, assess compliance at scale, and manage Azure resources effectively.

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Introduction' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/overview' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Cloud Adoption Framework for Azure' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/cloud-adoption-framework' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Azure Policy design principles' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policy-design-principles' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Azure Policy resources' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policy-resources' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Azure Policy definitions' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policy-definitions' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Evaluation of resources through Azure Policy' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policies-evaluation-resources' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Check your knowledge' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/check' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Summary' id=result
        link='https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/summary' %}

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
- {% include checkLine.html title='Secure your Azure resources with Azure role-based access control (Azure RBAC)' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/' %}{: .fs-3 }

    Learn how to use Azure RBAC to manage access to resources in Azure.

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Introduction' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/1-introduction' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='What is Azure RBAC?' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/2-rbac-overview' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Knowledge check - What is Azure RBAC?' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/3-knowledge-check-rbac-overview' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - List access using Azure RBAC and the Azure portal' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/4-list-access' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - Grant access using Azure RBAC and the Azure portal' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/5-grant-access' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - View activity logs for Azure RBAC changes' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/6-view-activity-logs' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Module assessment' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/7-knowledge-check-rbac' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Summary' id=result
        link='https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/8-summary' %}

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
- {% include checkLine.html title='Allow users to reset their password with Microsoft Entra self-service password reset' id=result
        link='https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/' %}{: .fs-3 }

    Evaluate self-service password reset to allow users in your organization to reset their passwords or unlock their accounts. Set up, configure, and test self-service password reset.

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Introduction' id=result
        link='https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/1-introduction' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='What is self-service password reset in Microsoft Entra ID?' id=result
        link='https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/2-self-service-password-reset' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Implement Microsoft Entra self-service password reset' id=result
        link='https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/3-implement-azure-ad-self-service-password-reset' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - Set up self-service password reset' id=result
        link='https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/4-exercise-set-up-self-service-password-reset' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Exercise - Customize directory branding' id=result
        link='https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/5-exercise-customize-directory-branding' %}
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
    {% include checkLine.html title='Summary' id=result
        link='https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/6-summary' %}
