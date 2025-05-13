"use client";

import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useConvexQuery } from '@/hooks/use-convex-query';
import { Plus } from 'lucide-react';
import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

const ContactsPage = () => {
  const { data, isLoading } = useConvexQuery(api.contacts.getAllContacts);

    if (isLoading) {  
      return(
        <div className="container mx-auto py-12"> 
          <BarLoader width = {'100%'} color = "#36d7b7" /> 
        </div>
      );
    }

    const {users , groups} = data || {users: [], groups: []};

    return <div>
      <div>
        <h1 classNae="text-5xl gradient-title">Contacts</h1>
          <Button>
            <Plus className = "mr-2 h-4 w-4" />
            Create Group
          </Button>
        
      </div>
      </div>;
};

export default ContactsPage;